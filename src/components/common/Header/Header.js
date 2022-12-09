import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Button, Container, Grid, Input, Toolbar, Typography } from '@material-ui/core';
import './header.scss';
import { pathKeys } from '../../../constants';
import images from '../../../images';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Header = () => {
  const activeStyle = { color: 'white', fontWeight: 'bold' };
  // const menuHeader = [{
  //   name: "Home",
  //   pathName: pathKeys.ROOT
  // }, {
  //   name: "Login",
  //   pathName: pathKeys.LOGIN
  // },
  // {
  //   name: "About",
  //   pathName: pathKeys.ABOUT
  // }];
  const menuHeader = [
    {
      name: 'Trang chủ',
      pathName: pathKeys.ROOT,
      icon: <HomeOutlinedIcon />,
    },
    {
      name: 'Quản lý tin',
      pathName: pathKeys.LOGIN,
      icon: <FaceOutlinedIcon />,
    },
    {
      name: 'Đơn hàng',
      pathName: pathKeys.TEST,
      icon: <LocalMallOutlinedIcon />,
    },
    {
      name: 'Chat',
      pathName: pathKeys.TEST2,
      icon: <LocalMallOutlinedIcon />,
    },
    {
      name: 'Thông báo',
      pathName: pathKeys.ABOUT,
      icon: <NotificationsNoneOutlinedIcon />,
    },
  ];
  return (
    <AppBar position="static" className="header-wrapper">
      <Container maxWidth="md" className="container-wrapper">
        <Grid container spacing={3}>
          <Grid item xs={2} className="logo-wrapper" alignItems="center" justifyContent="center">
            <img src={images.logo} alt="logo" className="logo" />
          </Grid>
          <Grid item xs={8}>
            <Toolbar className="toolBar">
              {menuHeader.map((item, index) => {
                if (item.pathName === pathKeys.ROOT) {
                  return (
                    <NavLink exact to={item.pathName} className="item-menu" activeStyle={activeStyle} key={`${index}`}>
                      {item.icon} {item.name}
                    </NavLink>
                  );
                } else {
                  return (
                    <NavLink exact to={item.pathName} className="item-menu" activeStyle={activeStyle} key={`${index}`}>
                      {item.icon} {item.name}
                    </NavLink>
                  );
                }
              })}
            </Toolbar>
          </Grid>
          <Grid item xs={2} className="addition">
            <MoreHorizIcon />
            Thêm
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md" className="container-wrapper">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid container className="search-container">
              <Grid item xs={11}>
                <Input
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  disableUnderline={true}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={1} className="search-icon-container">
                <SearchOutlinedIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Button className="login">
              <PermIdentityIcon />
              <Typography>Đăng nhập</Typography>
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" className="btn">
              Đăng tin
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
