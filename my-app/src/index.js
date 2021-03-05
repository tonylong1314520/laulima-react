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
              <Grid.Row>
                <Grid.Column>
                  <div className="one">
                    <Button medium style={{backgroundColor:'#17a2b8', color:'white'}}><Icon name='paper plane'/>UH Login</Button>
                    <p style={{color: 'white', textAlign:'center'}}><i><small>Fill out a request assistance ticket</small></i></p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="one">
                    <Button style={{backgroundColor:'#17a2b8', color:'white', marginTop: 20}}><Icon name='globe'/>Request Site</Button>
                    <p style={{color: 'white', textAlign:'center'}}>
                      <i><small>Faculty/Staff: request a development site or combining (crosslist) of courses</small></i>
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="one">
                    <Button style={{backgroundColor:'#17a2b8', color:'white'}}><Icon name='paper plane'/>Laulima Help</Button>
                    <p style={{color: 'white', textAlign:'center'}}>
                      <i><small>Search our Laulima System Help, User Guide, and FAQs</small></i>
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <div className="one">
                    <Button style={{backgroundColor:'#17a2b8', color:'white', marginTop: 20}}><Icon name='phone'/>Help Desk</Button>
                    <p style={{color: 'white', textAlign:'center'}}>
                      <i><small>(808) 956-8883</small></i>
                      <i><small>Toll Free: (800) 558-2669</small></i>
                      <i><small>help@hawaii.edu</small></i>
                    </p>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    )
  }
}

class SplitMenu extends React.Component {
  render() {
    return (
        <div className="split">
          <div className="splitOne">
            <Header as='h2' style={{textAlign: 'center', marginTop: 10}}><b>Notices</b></Header>
            <p className="theItems">
              <b>Daily Down Time:</b> Laulima will be unavailable daily from 3:00am-4:00am HST for server backup and maintenance.
            </p>
            <p className="theItems">
              <b>Auto Log-Off:</b> Laulima automatically logs off if no activity is detected for two hours. A warning message will appear prior to log-off. Laulima does not detect typing within a single message or document unless it is saved or refreshed.
            </p>
            <p className="theItems">
              <b>Laulima:</b> <a href=""><u>Technical Requirements</u></a>
            </p>
            <p className="theItems">
              <b>Additional Laulima downtime</b>, Sunday 03/21/21 from 6:00am to 10:00am HST.
            </p>
            <p className="theItems">
              <b>Spring 2021 courses have been published</b>(made accessible to students). Fall 2020 courses have been unpublished
            </p>
            <p className="theItems">
            <b>Spring 2021 courses have been published</b>(made accessible to students). Fall 2020 courses have been unpublished.
            </p>
            <p className="theItems">
              <b>Missing a course?</b> If you do not see your Spring 2021 course listed in the tab cluster near the top of the page, check if it is listed in the "Sites" drawer. To <a href={""}><u>put sites</u></a> into the tab cluster on the top, click the star next to the title in the Sites drawer. Note that instructors can also <a href={""}><u>manually publish and unpublish</u></a> courses, so you may not see all of the courses you are associated with (or you may see more if an instructor re-published an older site). If it is not there, please fill out a <a href={""}><u>"Site Request"</u></a> form and provide detailed information about the course you are looking for. During very busy registration times courses may take a while to show up in your account. (Updated: 01/04/21)
            </p>
            <p className="theItems" style={{marginTop: 40}}>
              <b>Current info:</b> <a href="">more notices</a>
            </p>
            <p className="theItems" style={{marginBottom: 20}}>
              -- <a href="">Archive of Past Posts</a> ----
            </p>
          </div>
          <div className="splitTwo">
            <Header as='h2' style={{textAlign: 'center', marginTop: 10}}><b>Resources</b></Header>
            <p className="theItems">
              <b>Faculty Resources</b>
            </p>
            <div style={{marginLeft: 40, marginBottom: 20}}>
              <List bulleted>
                <List.Item className="theItems">Laulima <a href={""}><u>Resource Guide</u></a> for Faculty</List.Item>
                <List.Item className="theItems">Laulima <a href={""}><u>Course Design Assistance</u></a></List.Item>
                <List.Item className="theItems">UH System and Campus-based <a href={""}><u>Instructional Design Services</u></a></List.Item>
              </List>
            </div>
            <p className="theItems">
              <b>Student Resources</b>
            </p>
            <div style={{marginLeft: 40}}>
              <List bulleted>
                <List.Item className="theItems">
                  <a href={""}><u>Remote Learning Resources</u></a> for Students
                </List.Item>
              </List>
            </div>
          </div>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <p>
            <a href={""}><u>Request Assistance</u></a> | <a href={""}><u>Request Site</u></a> | <a href={""}><u>Suggestion Box</u></a> |
            <a href={""}><u>Accessibility Info</u></a>| <a href={""}><u>Title IX</u></a> | <a href={""}><u>MySuccess</u></a> |
            <a href={""}><u>University of Hawai'i</u></a> | <a href={""}><u>Info Tech Svcs</u></a></p>
          <p>
            Unauthorized access is prohibited by law in accordance with Hawai'i Revised Statutes.
            All use is subject to University of Hawai'i Executive Policy E2.210.
          </p>
          <i>
            Front page based on a design developed by an ohana of faculty and instructional designers from across our UH System - Mahalo!
          </i>
        </div>
    )
  }
}

class Laulima extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Segment style={{marginTop: -2, border: 'hidden', shadowOpacity: 0}}>
            <div style={{border: '1px solid lightgray'}}>
              <MiddlePic/>
              <SplitMenu/>
            </div>
          </Segment>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Laulima/>, document.getElementById('root'));