import React from 'react';

import { Container, Separator, Server } from './styles';
import Logo from '../../assets/wolf-logo.jpg';

const ServerList: React.FC = () => {
  return (
    <Container>
      <Server isHome>
        <img src={Logo} alt="Logo Fake Server Discord"/>
      </Server>

      <Separator />
      
      <Server />
      <Server />
      <Server className="active" />
      <Server />
      <Server />
      <Server hasNotifications />
      <Server />
      <Server />
      <Server mentions={10} />

    </Container>
  );
}

export default ServerList;