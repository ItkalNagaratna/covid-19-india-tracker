import React from 'react';
import styled from 'styled-components';
import { Card, Typography } from 'antd';
import { BaseAreaChart } from '../Charts'

const { Meta } = Card;
const { Text } = Typography;

const Cards = (props) => {
  // console.log("props.data", props.data);

  const locations = props.data && props.data.data;

  const activeData = locations && locations.map(loc => {
    return {
      key: loc.state,
      value: loc.active,
    }
  });

  const confirmedData = locations && locations.map(loc => {
    return {
      key: loc.state,
      value: loc.confirmed,
    }
  });

  const recovereddata = locations && locations.map(loc => {
    return {
      key: loc.state,
      value: loc.recovered,
    }
  });

  const deathsData = locations && locations.map(loc => {
    return {
      key: loc.state,
      value: loc.deaths,
    }
  });

  return (
    <GridContainer>
      <CardItem>
        <Card>
          <Meta
            title={<Text style={{ fontSize: 12, color: "gray" }}>Active Cases</Text>}
            description={<Text style={{ fontSize: 20, color: "#0B147E", textAlign: "center" }}>{props.data.active}</Text>}
          />
          <div style={{ marginTop: 25 }}>
            <BaseAreaChart data={activeData} />
          </div>
        </Card>
      </CardItem>

      <CardItem>
        <Card>
          <Meta
            title={<Text style={{ fontSize: 12, color: "gray" }}>Confirmed Cases</Text>}
            description={<Text style={{ fontSize: 20, color: "#0B147E", textAlign: "center" }}>{props.data.confirmed}</Text>}
          />
          <div style={{ marginTop: 25 }}>
            <BaseAreaChart data={confirmedData} />
          </div>
        </Card>
      </CardItem>
      <CardItem>
        <Card>
          <Meta
            title={<Text style={{ fontSize: 12, color: "gray" }}>Recovered Cases</Text>}
            description={<Text style={{ fontSize: 20, color: "#0B147E", textAlign: "center" }}>{props.data.recovered}</Text>}
          />
          <div style={{ marginTop: 25 }}>
            <BaseAreaChart data={recovereddata} />
          </div>
        </Card>
      </CardItem>
      <CardItem>
        <Card>
          <Meta
            title={<Text style={{ fontSize: 12, color: "gray" }}>Deaths</Text>}
            description={<Text style={{ fontSize: 20, color: "#0B147E", textAlign: "center" }}>{props.data.deaths}</Text>}
          />
          <div style={{ marginTop: 25 }}>
            <BaseAreaChart data={deathsData} />
          </div>
        </Card>
      </CardItem>
    </GridContainer>

  )
}

export default Cards;


const CardItem = styled.div`
  margin: 10px;
  box-shadow: 0px -1px 20px 7px rgb(212 223 255), 0 0 0 rgb(99 177 199), 0 20px 20px #b6f7ff;

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,.09);
    border-color: rgba(0,0,0,.09);
  }

  .ant-card-meta-avatar {
    float: left;
    padding-right: 40px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;

  @media only screen and (min-width: 400px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }


  @media only screen and (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr ;
  }

`;
