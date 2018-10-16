import * as React from 'react';
import { Lists } from './Lists';
import { Button, Grid, Row, Col } from 'react-bootstrap';

export const Home = (props: any) => (
    <Grid>
        <Row className='show-grid'>
            <Col md={8}>
                <Button>
                    Testing
                </Button>
                <Lists />
            </Col>
        </Row>
    </Grid>
)