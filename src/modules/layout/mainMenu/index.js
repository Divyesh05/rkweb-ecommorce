import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { apiEndPoint } from '../../../core/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './mainMenu.css'

const MainMenu = () => {
    const [menu, setMenu] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    const fetchCategoryMenu = async () => {
        const requestOptions = {
            method: "POST",
            headers: new Headers({ enctype: "multipart/form-data" }),
            body: {}
        };
        fetch(apiEndPoint + "web/getMenuCategory", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMenu(result.data);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        fetchCategoryMenu();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Container fluid={true} className="menuWrapper">
                <Row >
                    <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
                    {
                        menu.map((d, i) => {
                            return (
                                <Col key={d.id}>
                                    <span>{d.name}</span>
                                    <FontAwesomeIcon icon={faCaretDown} className="menuIcon" />
                                </Col>

                            )
                        })
                    }

                    <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
                </Row>
            </Container>
        )
    }
}
export default MainMenu;