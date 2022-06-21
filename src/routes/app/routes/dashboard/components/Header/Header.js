import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Typography from '@material-ui/core/Typography';

const Header = () => <QueueAnim type="bottom" className="ui-animate">
    <div className="container-fluid container-mw">
        <article className="article">
            <div className="box box-default">
                <div className="call-to-action cta-inline">
                    <div className="cta-inner">
                        <h5>
                            <img width={50} height={50} alt='linkdin' src="assets\images-demo\logo.png" />
                        </h5>
                        <span className="cta-text">Bienvenue chez    <Typography style={{ display: 'inline', color: '#3cccb4' }} className="article-title" component={"h5"} variant='title'>Green Collecte</Typography> on vous propose solution 100% tech</span>
                        <span className="cta-text" style={{ display: 'block' }}>pour déposer vos encombrants</span>
                    </div>
                </div>
            </div>
        </article>
    </div>
</QueueAnim>

export default Header;