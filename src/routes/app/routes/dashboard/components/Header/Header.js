import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ContainerMarkers from '../Stats/ContainerMarkers';

const Header = () => (<>
    <div className='row'>
        <div className="col-md-12">
            <QueueAnim type="bottom" className="ui-animate">
                <div className="container-fluid container-mw">
                    <div className="box box-default">
                        <div className="call-to-action cta-inline">
                            <div className="cta-inner">
                                <h5>
                                    <img width={50} height={50} alt='linkdin' src="assets\images-demo\logo.png" />
                                </h5>
                                <span className="cta-text">Bienvenue chez <Typography style={{ display: 'inline', color: '#3cccb4' }} className="article-title" component={"h5"} variant='title'>Green Collecte</Typography> on vous propose solution 100% tech</span>
                                <span className="cta-text" style={{ display: 'block' }}>pour déposer vos encombrants</span>
                            </div>
                        </div>
                    </div>
                </div>
            </QueueAnim>
        </div>
    </div>
    <div className='row'>
        <div className="col-md-12">
            <QueueAnim type="bottom" className="ui-animate">
                <div className="container-fluid container-mw">
                    <div className='box box-default'>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <div style={{ alignItems: "center", gap: '15px', display: "flex" }}>
                                    <Typography style={{ display: 'inline', color: '#3cccb4' }} className="article-title" component={"h5"} variant='title'>Comment ça marche ?</Typography> <span className="cta-text">La carte géographique des encombrants</span>
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className='col-md-12'>
                                    <ContainerMarkers />
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </div>
            </QueueAnim>
        </div>
    </div>

</>)
export default Header; 