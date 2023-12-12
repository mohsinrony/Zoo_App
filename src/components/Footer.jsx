const Footer = (props) => {
    let copyright = String.fromCodePoint(169);
    return <footer>{copyright} {props.footer}</footer>
}
export default Footer;


