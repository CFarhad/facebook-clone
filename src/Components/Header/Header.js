import {
  SearchRounded,
  HomeRounded,
  PeopleAltRounded,
  SubscriptionsRounded,
  SportsEsportsRounded,
  CodeRounded,
  NotificationsRounded,
  MessageRounded,
  AccountCircleRounded
} from '@material-ui/icons';
import {IconButton} from '@material-ui/core'
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
          alt="facebook logo"
        />
        <div className="header__search">
          <SearchRounded style={{ color: '#222831' }} />
          <input placeholder="Search everything" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__menu active">
          <HomeRounded fontSize="medium"/>
        </div>
        <div className="header__menu">
          <PeopleAltRounded fontSize="medium"/>
        </div>
        <div className="header__menu">
          <SubscriptionsRounded fontSize="medium"/>
        </div>
        <div className="header__menu">
          <SportsEsportsRounded fontSize="medium"/>
        </div>
        <div className="header__menu">
          <CodeRounded fontSize="medium"/>
        </div>
      </div>
      <div className="header__right">
        <IconButton className="hover">
          <MessageRounded fontSize="medium"/>
        </IconButton>
        <IconButton className="hover">
          <NotificationsRounded fontSize="medium"/>
        </IconButton>
        <IconButton className="header__avatar hover">
          <AccountCircleRounded fontSize="medium"/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
