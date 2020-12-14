import * as React from 'react';
import { AppBar, Button, Toolbar, FormControl, Select, MenuItem, makeStyles } from '@material-ui/core';
import LocalizedStrings from 'react-localization';
import { localizedStrings } from 'public/localization';
import { LanguageContext, AnimatedButton } from 'components';

const strings = new LocalizedStrings(localizedStrings);

const useStyles = makeStyles({
  button: {
    width: '120px',
  },
  languageSelect: {
    width: '100%',
    display: 'flex',
    float: 'right',
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  righ: {
    width: '100%',
  },
  formControl: {
    float: 'right',
    color: '#FFFFFF',
  },
  icon: {
    fill: '#FFFFFF',
  },
});

export const NavBar = () => {
  const languageContext = React.useContext(LanguageContext);
  const classes = useStyles();

  strings.setLanguage(languageContext.language);

  const handleLanguageChange = (event: { target: { value: string } }) => {
    languageContext.setLanguage(event.target.value);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <AnimatedButton>{strings.aboutMe}</AnimatedButton>
        <AnimatedButton>{strings.myProjects}</AnimatedButton>
        <AnimatedButton>{strings.contactMe}</AnimatedButton>
        <div className={classes.righ}>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              onChange={handleLanguageChange}
              label="Language"
              defaultValue={languageContext.language == 'en' ? 'en' : 'pl'}
              className={classes.languageSelect}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
            >
              <MenuItem value={'pl'}>PL</MenuItem>
              <MenuItem value={'en'}>EN</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Toolbar>
    </AppBar>
  );
};
