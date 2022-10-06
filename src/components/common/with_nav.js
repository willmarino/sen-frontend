import { useNavigate } from "react-router-dom";

const withNav = Component => props => {
    const navigate = useNavigate();
    return <Component { ...props } navigate={navigate} />;
}

export default withNav;