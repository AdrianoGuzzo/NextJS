/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(styles);

const ListItemCustom = ({
  href,
  classListItem,
  classNavLink,
  classSocialIcons,
  classListItemText,
  classTooltip,
  icon,
  text,
  ...props
}) => {
  return (
    <ListItem className={classListItem}>
      <Hidden mdUp implementation="js">
        <Button
          color="transparent"
          href={href}
          target="_blank"
          className={classNavLink}
        >
          <i className={classSocialIcons + ` fab fa-${icon}`} />
          <span className={classListItemText}>{text}</span>
        </Button>
      </Hidden>
      <Hidden smDown implementation="js">
        <Tooltip
          id="instagram-tooltip"
          title={text}
          placement={"top"}
          classes={{ tooltip: classTooltip }}
        >
          <Button
            color="transparent"
            href={href}
            target="_blank"
            className={classNavLink}
          >
            <i className={classSocialIcons + ` fab fa-${icon}`} />
          </Button>
        </Tooltip>
      </Hidden>
    </ListItem>
  );
};
export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>unarchive</Icon> Upgrade to PRO
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem> */}
      <ListItemCustom
        href="https://www.linkedin.com/in/adriano-guzzo"
        classListItem={classes.listItem}
        classNavLink={classes.navLink}
        classSocialIcons={classes.socialIcons}
        classListItemText={classes.listItemText}
        classTooltip={classes.tooltip}
        classListItem={classes.listItem}
        icon="linkedin"
        text="Linkedin"
      />
      <ListItemCustom
        href="https://www.facebook.com/AdrianoGuzzo"
        classListItem={classes.listItem}
        classNavLink={classes.navLink}
        classSocialIcons={classes.socialIcons}
        classListItemText={classes.listItemText}
        classTooltip={classes.tooltip}
        classListItem={classes.listItem}
        icon="facebook"
        text="Facebook"
      />
      <ListItemCustom
        href="https://www.instagram.com/adrianoguzzo"
        classListItem={classes.listItem}
        classNavLink={classes.navLink}
        classSocialIcons={classes.socialIcons}
        classListItemText={classes.listItemText}
        classTooltip={classes.tooltip}
        classListItem={classes.listItem}
        icon="instagram"
        text="Instagram"
      />
    </List>
  );
}
