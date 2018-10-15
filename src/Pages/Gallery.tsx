
import * as React from 'react';
import '../App.css';
import FramedPicture from '../FramedPicture';
import Constants from  '../pictures';



class Home extends React.Component <{}, { items: any, hasMore: boolean }> {
  public constructor(props:{}) {
    super(props);
    this.state = {
      hasMore: true,
      items: Constants.pictureData.PictureGroup.slice(0, 3)
    };


  }

  public componentDidMount() {
    // window.onscroll = this.handleScroll;
}

  public fetchMoreData = () => {
   const allItems = this.state.items.concat(Constants.pictureData.PictureGroup.slice(this.state.items.length, this.state.items.length + 4));
    this.setState({
      items: allItems
    });
    if (allItems.length >= Constants.pictureData.PictureGroup.length) {
      this.setState({ hasMore: false });
      return;
    }
  };

  public handleScroll = (event: any) => {
    // const heightBound = window.outerHeight * 0.8
    // if (heightBound > window.scrollY) {
    //    this.fetchMoreData();
        // tslint:disable-next-line
    //    console.log('fetchihng data.');
    // }
    // tslint:disable-next-line
    // console.log("*****************");
    // tslint:disable-next-line
    // console.log("BCH:" + window.document.body.clientHeight);
    // tslint:disable-next-line
    // console.log("WIH:" + window.innerHeight);
    // tslint:disable-next-line
    // console.log("WSY:" + window.scrollY);

    const scrolledItem = document.getElementById("bottomDiv") as HTMLElement;
    const rect = scrolledItem.getBoundingClientRect();
    const pos = rect.top + document.body.scrollTop;

      const winTop = window.scrollY;
      if (pos < winTop + 100) {
        // tslint:disable-next-line
        console.log("pos:" + pos);
        // tslint:disable-next-line
        console.log("winTop:" + winTop);
      }
  }


  public render() {
    return (
      <React.Fragment>
        <div className="container bg-3 text-left gallery">

          <div className="row bg-box">
            <h3><span className="glyphicon glyphicon-camera" /> Our cheesy photo gallery</h3>
            <p>
              Approximately 2 years ago we decided to document our life and love with a weekly selfie. Ultimately we don't care too much how we look and below are a few of our memorable moments.
            </p>
          </div>

          {this.state.items.map((groupItem: any, groupIndex: number) =>
            <React.Fragment key={groupIndex}>
              <div  className={groupIndex < 100 ? "row slideanim slide" : "row slideanim"}>
                {groupItem.Pictures.map((item: any, index: number) =>
                  <React.Fragment key={item.Src} >
                      <FramedPicture key={item.Src} imageUrl={item.Src} landscape={item.Landscape} title={item.Title} description={item.Description} mapLongitude={item.Longitude} mapLatitude={item.Latitude} />
                  </React.Fragment>
                )}
              </div><br />
            </React.Fragment>
            )}
            <br />
            <br />
            <p className='text-center'>
              <button type="button" className={this.state.hasMore ? 'btn btn-primary' : 'btn btn-primary disabled'} onClick={this.fetchMoreData}>See More Dumb Pics ;)</button>
            </p>
        </div><br />

        <div id="bottomDiv">&nbsp;</div>
       <br /><br />
      </React.Fragment>
    );
  }
}

export default Home;
