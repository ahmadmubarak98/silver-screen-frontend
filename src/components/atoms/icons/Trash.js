import { SvgIcon } from "@material-ui/core";

export const Trash = (props) => {
  return (
    <SvgIcon {...props}>
      <g
        id="trash-icon"
        data-name="trash-icon"
        transform="translate(4.3 3) scale(1.3)"
      >
        <path
          paintOrder="stroke fill markers"
          fillRule="evenodd"
          d="M1.124 11.389c0 .783.64 1.423 1.424 1.423h5.694c.783 0 1.424-.64 1.424-1.423V2.847H1.124v8.542zM10.377.712h-2.49L7.173 0H3.615l-.712.712H.413v1.423h9.964V.712z"
        />
      </g>
    </SvgIcon>
  );
};
