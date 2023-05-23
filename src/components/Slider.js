import React, { Component } from "react";
import Person from "./Person";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div className="tag">
          <h3>Construction</h3>
        </div>
        <div className="sliding">
          <Person
            name="Ghanshyam provision (main)"
            img_src="https://storage.googleapis.com/putatoeapp/Image/testImage/WO9R3MV"
            subtitle="Ghanshyamprovison(main)"
          />
          <Person
            name="Pulak shops"
            img_src="https://storage.googleapis.com/putatoeapp/Image/testImage/28HSHY4"
            subtitle="Pulak shops"
          />
          <Person
            name="Singh Building Material"
            img_src="https://storage.googleapis.com/putatoeapp/Image/testImage/D81OFGR"
            subtitle="RajanSingh16"
          />
          <Person
            name="Ghanshyam provision (main)"
            img_src="https://storage.googleapis.com/putatoeapp/Image/testImage/WO9R3MV"
            subtitle="Ghanshyamprovison(main)"
          />
          <Person
            name="Ghanshyam provision (main)"
            img_src="https://storage.googleapis.com/putatoeapp/Image/testImage/WO9R3MV"
            subtitle="Ghanshyamprovison(main)"
          />
        </div>
      </div>
    );
  }
}
