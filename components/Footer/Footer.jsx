import Link from 'next/link';
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react';

import styles from './footer.module.css';

const Footer = () => (
  <Segment vertical as='footer' className={styles.footer}>
    <Container text className={styles.container}>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Header as='h4' content='Nosotros' />
            <List>
              <List.Item>
                <Link href='/about'>
                  <a>Conoce más</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as='h4' content='Servicios' />
            <List>
              <List.Item>
                <Link href='/'>
                  <a>Todos los productos</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h4'>Hecho para</Header>
            <p>
              <a href='https://kcfashion.store/'>K.C Fashion</a> desarrollado por{' '}
              <a href='https://www.dycosolutions.com/'>DyCO Solutions S.A.S</a>
            </p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon='instagram'
                style={{ display: 'flex' }}
                content={<a href='https://instagram.com/kcfashionaguachica'>Instagram</a>}
              />
              <List.Item
                icon='facebook'
                style={{ display: 'flex' }}
                content={<a href='https://facebook.com/kcfashionaguachica'>Facebook</a>}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className={styles.colophon}>
        <p className={styles['colophon-entry']}>
          Icons made by{' '}
          <a target='_blank' href='https://www.flaticon.com/authors/freepik' title='Freepik'>
            Freepik
          </a>
          {' from '}
          <a target='_blank' href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </p>
        {/*<p className={styles['colophon-entry']}>
          Avocado images taken from{' '}
          <a
            className={styles.acnor}
            target='_blank'
            href='https://www.californiaavocado.com/avocado101/avocado-varieties'
            title='California Avocado'
          >
            Avocado 101
          </a>
          {' at '}
          <a target='_blank' href='https://www.californiaavocado.com' title='Flaticon'>
            California Avocado
          </a>
        </p>*/}
      </div>
    </Container>
  </Segment>
);

export default Footer;
