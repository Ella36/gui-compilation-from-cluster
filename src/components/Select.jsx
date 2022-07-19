import React from "react";
import Element from "./Element";
import Container from 'react-bootstrap/Container';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Select extends React.Component {
  state = {
    items: [],
    hasMore: true,
    isNotCreated: true,
  };
  fetchMoreData = () => {
    if (this.state.items.length >= this.props.clipsArray.amountOfClips) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call to slow down scrolling 
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat([""])
      });
    }, 250);
  };

  render() {
    return (
      <div>
        <h1> Select clips </h1>
        <Container>
          {(() => {
            if (this.props.clipsArray.amountOfClips > 1) {
              if (this.state.isNotCreated) {
                this.state.items = [
                  "",
                  "",
                  "",
                  "",
                ]
                this.state.isNotCreated = false
              }
              return (
                <InfiniteScroll
                  dataLength={this.state.items.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.hasMore}
                  loader={<h4>Loading...</h4>}
                  scrollableTarget="scrollableSelection"
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                >
                  {
                    this.state.items.map(
                      (_, i) =>
                        <Element
                          key={i}
                          clip={this.props.clipsArray.clips[i]}
                          clickHandler={this.props.clickHandler}
                          isCompilation={false}
                          id={i}
                        />
                    )}
                </InfiniteScroll>

              )
            }
          })()}
        </Container>
      </div>
    );
  }
};
