
import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

export default function HeaderDashboard() {
    return (
        <div className="App container py-3">
            <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                <LinkContainer to="/">
                    <Navbar.Brand className="font-weight-bold text-muted">
                        Next Action
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav activeKey={window.location.pathname}>
                        <LinkContainer to="/inbox">
                            <Nav.Link>Inbox</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/logout">
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

