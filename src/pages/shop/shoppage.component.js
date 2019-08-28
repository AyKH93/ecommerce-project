import React from "react";
import Shop_Data from "./shopdata.js";
import { CollectionPreview } from "../../Components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: Shop_Data
    };
  }

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
