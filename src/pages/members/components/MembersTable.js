/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  Icon,
  CircularProgress,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Info as InfoIcon,
  Visibility as ViewIcon,
  VisibilityOff as ViewOffIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addMember, deleteMember, editMember, getMembers } from '../../../store/thunk/member.thunk';
import MemberModal from './MemberModal';
// import Loader from 'components/loader/Loader';
import Loader from '../../../components/loader/Loader';
// import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import { SearchBar } from '../../../components/navbar/searchBar/SearchBar';

const MembersTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cancelRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const role = useSelector((state) => state?.auth?.user?.role);
  const memberData = useSelector((state) => state.members?.data);
  const [members, setMembers] = useState(memberData);
  const [memberEditData, setMemberEditData] = useState(null);
  const [indexOfRow, setIndexOfRow] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [rowLoadingStates, setRowLoadingStates] = useState(members?.map(() => false) || []);

  const toggleAccordion = (rowId) => {
    setExpandedRows((prevRows) => ({
      ...prevRows,
      [rowId]: !prevRows[rowId]
    }));
  };

  const handleNavigate = (id) => {
    navigate(`/admin/member-data?id=${id}`);
  };

  const handleOpenConfirmationModal = (index) => {
    setIndexOfRow(index);
    setIsDeleteConfirmationOpen(true);
  };

  const handleCancelDelete = () => {
    setIsDeleteConfirmationOpen(false);
  };

  const triggerSave = () => {
    setMemberEditData(null);
    setIsOpen(true);
  };

  const handleSaveMember = (memberData) => {
    dispatch(addMember({ memberData }))
      .then(() => {
        dispatch(getMembers())
          .then((res) => {
            setMembers(res.payload);
            toast.success('Member Added Successfully');
          })
          .catch(() => {
            toast.success('Member Added Successfully');
            toast.error('Error while getting updated member');
          });
      })
      .catch(() => {
        toast.error('Error while adding member');
      });
  };

  const handleDelete = (id, index) => {
    setRowLoadingStates((prevStates) => {
      const newState = [...prevStates];
      newState[index] = true;
      return newState;
    });

    dispatch(deleteMember(id))
      .then(() => {
        dispatch(getMembers())
          .then((res) => {
            setMembers(res.payload);
            toast.success('Member Deleted Successfully');
            setRowLoadingStates((prevStates) => {
              const newState = [...prevStates];
              newState[index] = false;
              return newState;
            });
          })
          .catch(() => {
            toast.error('Error while getting updated Member');
            setRowLoadingStates((prevStates) => {
              const newState = [...prevStates];
              newState[index] = false;
              return newState;
            });
          });
      })
      .catch(() => {
        toast.error('Error while deleting Member');
        setRowLoadingStates((prevStates) => {
          const newState = [...prevStates];
          newState[index] = false;
          return newState;
        });
      });
  };

  const triggerEditMember = (rowData, index) => {
    setMemberEditData(rowData);
    setIndexOfRow(index);
    setIsOpen(true);
  };

  const handleEditMember = (memberData, index) => {
    setRowLoadingStates((prevStates) => {
      const newState = [...prevStates];
      newState[index] = true;
      return newState;
    });

    dispatch(editMember(memberData))
      .then(() => {
        dispatch(getMembers())
          .then((res) => {
            setMembers(res.payload);
            toast.success('Member Edited Successfully');
            setRowLoadingStates((prevStates) => {
              const newState = [...prevStates];
              newState[index] = false;
              return newState;
            });
          })
          .catch(() => {
            toast.error('Error while getting updated Member');
            setRowLoadingStates((prevStates) => {
              const newState = [...prevStates];
              newState[index] = false;
              return newState;
            });
          });
      })
      .catch(() => {
        toast.error('Error while Editing Member');
        setRowLoadingStates((prevStates) => {
          const newState = [...prevStates];
          newState[index] = false;
          return newState;
        });
      });
  };

  // useEffect(() => {
  //   setIsLoading(true);
  //   dispatch(getMembers())
  //     .then((res) => {
  //       setMembers(res.payload);
  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       toast.error('Error in getting members');
  //     });
  // }, []);

  const filterSearch = (search) => {
    const filterSearch = search.toLowerCase();
    const data = memberData?.filter((data) => {
      return filterSearch === ''
        ? data
        : data?.name.toLowerCase().includes(filterSearch) ||
            data?.email.toLowerCase().includes(filterSearch) ||
            data?.role.toLowerCase().includes(filterSearch) ||
            data?.department?.name.toLowerCase().includes(filterSearch) ||
            data?.teams
              .map((team) => team?.name)
              .join(', ')
              .toLowerCase()
              .includes(filterSearch);
    });
    setMembers(data);
  };

  const bgButton = 'secondaryGray.300';
  const bgHover = { backgroundColor: 'secondaryGray.400' };
  const bgFocus = { backgroundColor: 'secondaryGray.300' };
  let menuBg = 'white';
  const ethColor = 'blue';

  return (
    <div>
      {/* <MemberModal
        open={isOpen}
        close={() => setIsOpen(false)}
        members={members}
        onSave={handleSaveMember}
        editData={memberEditData}
        edit={handleEditMember}
        index={indexOfRow}
      /> */}
      {/* <AlertDialog open={isDeleteConfirmationOpen} onClose={handleCancelDelete} leastDestructiveRef={cancelRef}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Delete Member
        </Typography>
        <Typography>Are you sure you want to delete this member?</Typography>
        <Button onClick={handleCancelDelete}>Cancel</Button>
        <Button
          color="error"
          onClick={() => {
            handleDelete(members[indexOfRow]._id, indexOfRow);
            handleCancelDelete();
          }}
        >
          Delete
        </Button>
      </AlertDialog> */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{
            width: { sm: '100%', md: 'auto' },
            backgroundColor: menuBg,
            p: '8px',
            borderRadius: '30px'
          }}
        >
          <SearchBar Filter={filterSearch} />
        </Box>
        <Button color="primary" onClick={() => triggerSave()}>
          Add Member
        </Button>
      </Box>
      {/* {isLoading && <Loader />}
      {!isLoading && (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Current Salary</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Teams</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members?.map((row, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell onClick={() => handleNavigate(row._id)} style={{ cursor: 'pointer' }}>
                      {row?.name}
                    </TableCell>
                    <TableCell>{row?.email}</TableCell>
                    <TableCell>{row?.role}</TableCell>
                    <TableCell>{row?.currentSalary ? `${row?.currentSalary} $ ` : 'N/A'}</TableCell>
                    <TableCell>{row?.department ? row?.department?.name : 'N/A'}</TableCell>
                    <TableCell>{row?.teams && row?.teams.length > 0 ? row?.teams?.map((team) => team?.name).join(', ') : 'N/A'}</TableCell>
                    <TableCell textAlign="center">
                      {rowLoadingStates[index] ? (
                        <CircularProgress size={20} color="primary" />
                      ) : (
                        <>
                          <Button
                            sx={{
                              backgroundColor: bgButton,
                              '&:hover': bgHover,
                              '&:focus': bgFocus,
                              '&:active': bgFocus,
                              width: '37px',
                              height: '37px',
                              borderRadius: '10px'
                            }}
                            onClick={() => toggleAccordion(row._id)}
                          >
                            <Icon as={expandedRows[row._id] ? ViewOffIcon : ViewIcon} color={ethColor} fontSize="small" />
                          </Button>
                          <Button
                            sx={{
                              backgroundColor: bgButton,
                              '&:hover': bgHover,
                              '&:focus': bgFocus,
                              '&:active': bgFocus,
                              width: '37px',
                              height: '37px',
                              borderRadius: '10px'
                            }}
                            onClick={() => triggerEditMember(row, index)}
                            disabled={rowLoadingStates[index]}
                          >
                            <Icon as={EditIcon} color={ethColor} fontSize="small" />
                          </Button>
                          {row?.role !== 'SUPERADMIN' && (
                            <Button
                              sx={{
                                backgroundColor: bgButton,
                                '&:hover': bgHover,
                                '&:focus': bgFocus,
                                '&:active': bgFocus,
                                width: '37px',
                                height: '37px',
                                borderRadius: '10px'
                              }}
                              disabled={rowLoadingStates[index]}
                              onClick={() => handleOpenConfirmationModal(index)}
                            >
                              <Icon as={DeleteIcon} color={ethColor} fontSize="small" />
                            </Button>
                          )}
                          {row?.role !== 'SUPERADMIN' || (
                            <Button
                              sx={{
                                backgroundColor: bgButton,
                                '&:hover': bgHover,
                                '&:focus': bgFocus,
                                '&:active': bgFocus,
                                width: '37px',
                                height: '37px',
                                borderRadius: '10px'
                              }}
                              disabled={true}
                            >
                              <Icon as={DeleteIcon} color={ethColor} fontSize="small" />
                            </Button>
                          )}
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={12}>
                      <Collapse in={expandedRows[row._id]}>
                        <Box
                          p={4}
                          sx={{
                            backgroundColor: menuBg,
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            borderRadius: 'md'
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bolder', marginRight: '5px' }}>
                              Additional Info
                            </Typography>
                            <Icon as={InfoIcon} color={ethColor} fontSize="small" />
                          </Box>
                          <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="additional info table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Contact Number</TableCell>
                                  <TableCell>Emergency Contact Name</TableCell>
                                  <TableCell>Emergency Contact Contact</TableCell>
                                  <TableCell>Emergency Contact Relation</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow>
                                  <TableCell>{row?.contactNumber ? row?.contactNumber : 'N/A'}</TableCell>
                                  <TableCell>{row?.emergencyContactName ?? 'N/A'}</TableCell>
                                  <TableCell>{row?.emergencyContactNumber ?? 'N/A'}</TableCell>
                                  <TableCell>{row?.emergencyContactRelation ?? 'N/A'}</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )} */}

      <h1>hello</h1>
    </div>
  );
};

export default MembersTable;
