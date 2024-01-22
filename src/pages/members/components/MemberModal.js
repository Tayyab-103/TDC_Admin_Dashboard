/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Button, FormControl, FormHelperText, Input, InputAdornment, MenuItem, Modal, Select, Stack, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { getTeams } from 'store/thunk/team.thunk';
import { getTeams } from '../../../store/thunk/team.thunk';
import { getDepartments } from '../../../store/thunk/department.thunk';
import { memberValidationSchema } from '../../../schema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/system';
import { toast } from 'react-toastify';

const StyledTextField = styled(TextField)({
  width: '100%',
  marginBottom: '1rem'
});

const MemberModal = ({ open, close, members, onSave, editData, edit, index }) => {
  const dispatch = useDispatch();
  const teamData = useSelector((state) => state.teams?.data);
  const [teams, setTeams] = useState(teamData);
  const departmentData = useSelector((state) => state.department?.data?.departments);
  const [departments, setDepartments] = useState(departmentData);
  const [selected, setSelected] = useState([]);

  const initialData = {
    name: editData?.name || '',
    email: editData?.email || '',
    contactNumber: editData?.contactNumber || '',
    role: editData?.role || '',
    currentSalary: editData?.currentSalary || '',
    department: editData?.department?._id || '',
    teams: editData?.teams || [],
    emergencyContactName: editData?.emergencyContactName || '',
    emergencyContactNumber: editData?.emergencyContactNumber || '',
    emergencyContactRelation: editData?.emergencyContactRelation || ''
  };

  const [memberData, setMemberData] = useState(initialData);

  const handleModalClose = () => {
    close();
  };

  const verifyEmail = (values) => {
    const emailExists = members?.filter((member) => member.email === values.email);
    return !emailExists[0]?.email;
  };

  const handleSubmit = (values) => {
    if (editData) {
      edit(values, index);
    } else {
      if (!verifyEmail(values)) {
        toast.error('Email already exists');
        return;
      }
      onSave(values);
      setMemberData(initialData);
    }
    close();
  };

  useEffect(() => {
    if (open) {
      dispatch(getTeams()).then((res) => {
        setTeams(res.payload);
      });
      dispatch(getDepartments()).then((res) => {
        setDepartments(res.payload);
      });
    }
  }, [open]);

  useEffect(() => {
    if (editData) {
      setMemberData(editData);
      setMemberData((prevData) => ({
        ...prevData,
        department: editData?.department?._id || '',
        teams: editData?.teams?.map((team) => team._id) || ''
      }));
    } else {
      setMemberData(initialData);
    }
  }, [editData]);

  useEffect(() => {
    if (editData?.teams) {
      setSelected(
        editData?.teams?.map((team) => ({
          label: team.name,
          value: team._id
        }))
      );
    } else {
      setSelected([]);
    }
  }, [editData?.teams]);

  const RoleOptions = ['', 'ADMIN', 'HR', 'BUSINESS_MANAGER', 'SALES_AGENT', 'TECH', 'HELPER'];

  const inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    padding: '10px'
  };

  const errorStyle = {
    color: 'red',
    marginTop: '5px'
  };

  return (
    <>
      <Modal open={open} onClose={close}>
        <div>
          <StyledTextField
            label={editData ? 'Edit Member' : 'Add Member'}
            fullWidth
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button color="primary" onClick={handleModalClose}>
                    Cancel
                  </Button>
                </InputAdornment>
              )
            }}
          />
        </div>
        <Formik initialValues={memberData} validationSchema={memberValidationSchema} onSubmit={handleSubmit}>
          <Form>
            <Stack spacing={2} sx={{ p: 3 }}>
              <StyledTextField
                name="name"
                label="Name"
                placeholder="Name"
                style={inputStyle}
                error={<ErrorMessage name="name" component="div" style={errorStyle} />}
              />
              <StyledTextField
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                style={inputStyle}
                error={<ErrorMessage name="email" component="div" style={errorStyle} />}
              />
              <StyledTextField
                name="contactNumber"
                label="Contact Number"
                placeholder="Contact Number"
                style={inputStyle}
                error={<ErrorMessage name="contactNumber" component="div" style={errorStyle} />}
              />
              <FormControl style={inputStyle}>
                <FormLabel>Role</FormLabel>
                <Select name="role" value={memberData.role} onChange={(e) => setMemberData((prev) => ({ ...prev, role: e.target.value }))}>
                  <MenuItem value="" disabled>
                    Select Role
                  </MenuItem>
                  {RoleOptions.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error={<ErrorMessage name="role" component="div" style={errorStyle} />} />
              </FormControl>
              <StyledTextField
                name="currentSalary"
                type="number"
                label="Current Salary"
                placeholder="Current Salary"
                style={inputStyle}
                error={<ErrorMessage name="currentSalary" component="div" style={errorStyle} />}
              />
              <FormControl style={inputStyle}>
                <FormLabel>Department</FormLabel>
                <Select
                  name="department"
                  value={memberData.department}
                  onChange={(e) => setMemberData((prev) => ({ ...prev, department: e.target.value }))}
                >
                  <MenuItem value="" disabled>
                    Select Department
                  </MenuItem>
                  {departments?.map((option) => (
                    <MenuItem key={option._id} value={option._id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error={<ErrorMessage name="department" component="div" style={errorStyle} />} />
              </FormControl>
              <FormControl style={inputStyle}>
                <FormLabel>Teams</FormLabel>
                <Autocomplete
                  multiple
                  id="teams"
                  options={teams?.map((row) => ({
                    value: row._id,
                    label: row.name
                  }))}
                  onChange={(_, newValue) => {
                    setSelected(newValue);
                    setMemberData((prev) => ({ ...prev, teams: newValue.map((item) => item.value) }));
                  }}
                  value={selected}
                  renderInput={(params) => <TextField {...params} placeholder="Teams" />}
                />
                <FormHelperText error={<ErrorMessage name="teams" component="div" style={errorStyle} />} />
              </FormControl>
              <StyledTextField
                name="emergencyContactName"
                label="Emergency Contact Name"
                placeholder="Emergency Contact Name"
                style={inputStyle}
                error={<ErrorMessage name="emergencyContactName" component="div" style={errorStyle} />}
              />
              <StyledTextField
                name="emergencyContactNumber"
                label="Emergency Contact Number"
                placeholder="Emergency Contact Number"
                style={inputStyle}
                error={<ErrorMessage name="emergencyContactNumber" component="div" style={errorStyle} />}
              />
              <StyledTextField
                name="emergencyContactRelation"
                label="Emergency Contact Relation"
                placeholder="Emergency Contact Relation"
                style={inputStyle}
                error={<ErrorMessage name="emergencyContactRelation" component="div" style={errorStyle} />}
              />
            </Stack>
            <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ p: 3 }}>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
              <Button variant="outlined" onClick={handleModalClose}>
                Cancel
              </Button>
            </Stack>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default MemberModal;
