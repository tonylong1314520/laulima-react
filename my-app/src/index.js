import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Item, Icon, Image, Grid, Button, GridColumn, List, Input, Divider, Segment } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <div className='top'>
          <Menu secondary>
            <Menu.Item fitted position='left'>
              <Image src="https://laulima.hawaii.edu/library/skin/morpheus-default/images/logo-laulima.png" size='small'></Image>
            </Menu.Item>
            <Menu.Item fitted position='right' style={{marginLeft:40}}>
              <i style={{color:'white'}}><small>can't login?&nbsp; | &nbsp;</small></i>
              <Button style={{backgroundColor:'#17a2b8', color:'white'}}>UH Login</Button>
              <p>&nbsp;&nbsp;</p>
              <Button style={{backgroundColor:'#17a2b8', color:'white'}}>Guest Login</Button>
              <p>&nbsp;&nbsp;</p>
            </Menu.Item>
          </Menu>
        </div>
    )
  }
}

class MiddlePic extends React.Component {
  render() {
    return (
        <div className='middle'>
          <Segment>
            <Image src="https://laulima.hawaii.edu/lum/fp/laulima_full_banner.jpg" fluid></Image>
          </Segment>
          <div className='middleBottom'>
            <Header as='h4' style={{textAlign: 'center', color: 'white'}}><b><i>Laulima Support: 24 hours a day, 7 days a week, 365 days a year</i></b></Header>
            <Grid container verticalAlign="middle" columns="four">
              <Grid.Column>
                <div className="one">
                  <Button medium style={{backgroundColor:'#17a2b8', color:'white'}}><Icon name='paper plane'/>UH Login</Button>
                  <p style={{color:'white'}}><small><i>Fill out a request assistance ticket</i></small></p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="one">
                  <Button style={{backgroundColor:'#17a2b8', color:'white'}}><Icon name='globe'/>Request Site</Button>
                  <p style={{color:'white', textAlign:'center'}}><small><i>Faculty/Staff: request a development site or combining (crosslist) of courses</i></small></p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="one">
                  <Button style={{backgroundColor:'#17a2b8', color:'white'}}><Icon name='paper plane'/>Laulima Help</Button>
                  <p style={{color:'white', textAlign:'center'}}><small><i>Search our Laulima System Help, User Guide, and FAQs</i></small></p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="one">
                  <Button style={{backgroundColor:'#17a2b8', color:'white'}}><Icon name='phone'/>Help Desk</Button>
                  <div class="text" style={{color:'white', textAlign:'center', whiteSpace:'pre-wrap'}}><small><i>
                    (808) 956-8883 {"\n"}
                    Toll Free: (800) 558-2669 {"\n"}
                    help@hawaii.edu
                  </i></small></div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div>

        </div>
    )
  }
}

class Laulima extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Segment style={{marginTop: -2}}>
            <MiddlePic/>
          </Segment>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Laulima/>, document.getElementById('root'));