import { React } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
                <Row className="mt-1">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <p> Sure you want to logout?</p>
                        <Button onClick={onLogout}>
                            Logout
                        </Button>
                    </Col>
                </Row>

            </Container>


        </div >
    )
}

export default Logout