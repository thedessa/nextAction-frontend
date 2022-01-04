import { React } from "react";
import { Button, Row, Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Utils/auth";
import '../Login/Login.css';

function Logout() {
    let navigate = useNavigate()

    let onLogout = () => {
        logout();
        navigate("/")
    }

    return (
        <div>
            <Container>
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Row className="mt-1">
                <p> Sure you want to logout?</p>
                <Button onClick={onLogout}>
                    Logout
                </Button>
            </Row>
                </Col>
            
            </Container>
            

        </div >
    )
}

export default Logout