import React from 'react';
import DefaultLayout from './components/DefaultLayout'
import { CardComponent } from './components/Cards'
import { StateWiseChart } from './components/Charts'
import { fetchData } from './api'
import { Row, Typography } from 'antd';

const { Title } = Typography;

class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await fetchData();

    console.log("data", data)

    const confirmed = data.reduce((count, item) => {
      return count + item.confirmed;
    }, 0);
    // console.log("confirmed", confirmed);
    const recovered = data.reduce((count, item) => {
      return count + item.recovered;
    }, 0);
    // console.log("recovered", recovered);

    const active = data.reduce((count, item) => {
      return count + item.active;
    }, 0);
    // console.log("active", active);

    const deaths = data.reduce((count, item) => {
      return count + item.deaths;
    }, 0);
    // console.log("deaths", deaths);

    this.setState({
      data: {
        confirmed,
        recovered,
        active,
        deaths,
        data,
      }
    });
  }

  render() {
    return (
      <div>
        <DefaultLayout>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              width={600}
              src={require('./assets/COVID-19a.png')}
            />
          </div>

          <CardComponent hoverable data={this.state.data} />

          {this.state.data && this.state.data.data &&
            <Row gutter={[50, 50]} style={{ marginTop: 50, padding: 50 }}>
              <Title style={{ paddingBottom: 50, fontSize:30 }}>State Wise COVID-19 Tracker</Title>
              <StateWiseChart data={this.state.data} />
            </Row>
          }

        </DefaultLayout>
      </div>
    );
  }
}

export default App;
