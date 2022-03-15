import { css, Theme } from "@emotion/react";
import { SHADOWS } from "~/styles/index.styles";

const styles = {
  section: (theme: Theme) => css`
    border-radius: 5px;
    padding: 20px;
    background: ${theme.colors.light.board};
    box-shadow: ${SHADOWS.BOX};
  `,
}

export default styles;