import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';


const DetailsMarker = ({ text, src, priority, nbPiece, weight, passage, creationDate }) => (
    <div>
        <Card style={{ maxWidth: 400 }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" style={{ backgroundColor: priority === "élevé" ? '#EF5350' : '#66BB6A' }} >
                        <span>{nbPiece}</span>
                    </Avatar>
                }
                title={`${creationDate ? new Date(creationDate.seconds * 1000).toLocaleDateString() : ''}`}
                subheader={`${weight} KG`}
            />
            <CardMedia
                style={{
                    height: 0,
                    paddingTop: '56.25%'
                }}
                image={src}
                title={text}
            />
            <CardContent>
                <table className="mdl-data-table" style={{ width: '100%' }}>

                    <thead className="cf">
                        <tr>
                            <th style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} className="mdl-data-table__cell--non-numeric"><b>Poids</b></th>
                            <th style={{ border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: "center" }} className="numeric">{weight}KG</th>
                        </tr>
                        <tr>
                            <th style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} className="mdl-data-table__cell--non-numeric"><b>NB piece</b></th>
                            <th style={{ border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: "center" }} className="numeric">{nbPiece}</th>
                        </tr>
                        {passage !== "" && (<tr>
                            <th style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} className="mdl-data-table__cell--non-numeric"><b>N°Passage</b></th>
                            <th style={{ border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: "center" }} className="numeric">{passage}</th>
                        </tr>)}
                        <tr>
                            <th style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} className="mdl-data-table__cell--non-numeric"><b>priorité</b></th>
                            <th style={{ border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: "center" }} className="mdl-data-table__cell--non-numeric">{priority}</th>
                        </tr>
                    </thead>
                </table>
            </CardContent>
        </Card>
    </div>
);


export default DetailsMarker;
