
import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
    
        this.state = {
          sections: [
            {
              title: 'Packs Tiempo Limitado',
              imageUrl: 'https://pbs.twimg.com/media/ExuNhguXIAQvto_.jpg',
              id: 1,
              linkUrl: 'pack'
            },
            {
              title: 'En la Camara',
              imageUrl: 'https://cdn.ligadegamers.com/imagenes/armas-de-fortnite-og.jpg',
              id: 2,
              linkUrl: 'camara'
            },
            {
              title: 'Brigada Estandartes',
              imageUrl: 'https://i.ytimg.com/vi/SfAqE0xpZgQ/maxresdefault.jpg',
              text:'Introducido en Capítulo 1, Temporada 9.',
              id: 3,
              linkUrl: 'brigada'
            },
            {
              title: 'Pase de Batalla',
              imageUrl: 'https://cdn2.unrealengine.com/br16-socialshare-lineup1-1920x1080-cc758b8820b8.jpg',
              size: 'large',
              id: 4,
              linkUrl: 'pase'
            },
            {
              title: 'Club de Fornite',
              imageUrl: 'https://larepublica.pe/resizer/OX9z5_Dr6BXXG8fcANPuVQ09zKE=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/6OGNHNEYUZDPFNRMEXRRGC3KXQ.jpg',
              size: 'large',
              id: 5,
              linkUrl: 'club'
            }
          ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) =>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }


}

export default Directory;