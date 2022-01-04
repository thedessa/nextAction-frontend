import { React } from "react";
import { Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Utils/auth";

function Logout() {
    let navigate = useNavigate()

    let onLogout = () => {
        logout();
        navigate("/")
    }

    return (
        <div>
            <Row className="mt-1">
                <p> Tem certeza que deseja fazer o logout?</p>
                <Button onClick={onLogout}>
                    Logout
                </Button>
            </Row>

        </div >
    )
}

export default Logout