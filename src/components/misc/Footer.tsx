import styled from "styled-components";
import colors from "styles/colors";

const StyledFooter = styled.footer`
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  background: ${colors.backgroundDarker};
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  opacity: 0.75;
  transition: all 0.2s ease-in-out;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
  &:hover {
    opacity: 1;
  }
  span {
    margin: 0 0.5rem;
    text-align: center;
  }
`;

const Footer = (props: { isFixed?: boolean }): JSX.Element => {
  return (
    <StyledFooter style={props.isFixed ? { position: "fixed" } : {}}>
      {/* <span>
      View source at <Link href={githubUrl}>github.com/lissy93/web-check</Link>
    </span>
    <span>
      <Link href="/about">Web-Check</Link> is
      licensed under <Link href={licenseUrl}>MIT</Link> -
      © <Link href={authorUrl}>Alicia Sykes</Link> 2023
    </span> */}
    </StyledFooter>
  );
};

export default Footer;
