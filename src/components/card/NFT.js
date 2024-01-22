/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Avatar, AvatarGroup, Box, Button, Card, CardContent, IconButton, Link, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function NFT(props) {
  const { image, name, author, bidders, download, currentbid } = props;
  const [like, setLike] = useState(false);

  const handleLikeToggle = () => {
    setLike(!like);
  };

  return (
    <Card sx={{ p: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { base: 'column', md: 'row', lg: 'column' },
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            mb: { base: '20px', '2xl': '20px' }
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '20px'
            }}
          />
          <Button
            sx={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              borderRadius: '50%',
              minWidth: '36px',
              height: '36px'
            }}
            onClick={handleLikeToggle}
          >
            <IconButton
              sx={{
                width: '20px',
                height: '20px',
                color: like ? 'brand.500' : undefined
              }}
            >
              {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Button>
        </Box>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { base: 'space-between', md: 'flex-start' },
              marginBottom: { base: 'auto', md: 0 }
            }}
          >
            <Box>
              <Typography
                variant={{
                  xs: 'h6',
                  sm: 'h5',
                  md: 'h5',
                  lg: 'h5',
                  xl: 'h5',
                  '2xl': 'h6',
                  '3xl': 'h5'
                }}
                fontWeight="bold"
                color="navy.700"
                marginBottom="5px"
              >
                {name}
              </Typography>
              <Typography variant={{ xs: 'body2', md: 'caption' }} color="secondaryGray.600" fontWeight="400">
                {author}
              </Typography>
            </Box>
            <AvatarGroup max={3} color="brand.500" sx={{ fontSize: '12px', marginTop: { md: '10px', xl: '10px' } }}>
              {bidders.map((avt, key) => (
                <Avatar key={key} src={avt} />
              ))}
            </AvatarGroup>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { base: 'space-between', md: 'flex-start' },
              marginTop: '25px'
            }}
          >
            <Typography variant="body2" fontWeight="700" color="brand.500">
              Current Bid: {currentbid}
            </Typography>
            <Link href={download}>
              <Button
                variant="contained"
                color="brand"
                size="small"
                sx={{
                  borderRadius: '70px',
                  fontSize: '12px',
                  minWidth: '120px',
                  paddingY: '5px'
                }}
              >
                Place Bid
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
