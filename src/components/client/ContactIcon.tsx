import { ThemeIcon, createStyles, Text } from "@mantine/core";
import { ContactIconProps } from "../../pages/AdminPages";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage: `linear-gradient(135deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][6]} 100%)`,
    backgroundColor: "transparent",
  },

  title: {
    color: theme.colors.gray[6],
  },

  description: {
    color: theme.black,
  },
}));

export const ContactIcon = ({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: ContactIconProps) => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      <ThemeIcon size={40} radius="md" className={classes.icon}>
        <Icon size="1.5rem"/>
      </ThemeIcon>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
};
