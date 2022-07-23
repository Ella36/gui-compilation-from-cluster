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
    if (!(this.state.hasMore)) {
      return;
    }
    // a fake async api call to slow down scrolling 
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat([""])
      });
    }, 100);
  };

  render() {
    return (
      <div>
        <h1> Select clips </h1>
        <Container>
          {(() => {
            if ((this.props.clipsArray.amountOfClips > 1)
              && (this.state.isNotCreated)) {
              this.setState({
                items: [...new Array(4)],
                isNotCreated: false,
              })
            }
          })()}
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Load clips with "Read clips.json"</h4>}
            scrollableTarget="scrollableSelection"
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {(() => {
              let clipsToDisplay = []
              let clipsToDispayClipsArrayIndex = []
              let freq = {}
              this.state.items.forEach((_, _i) => {
                const c = this.props.clipsArray.clips.find(
                  (clip) =>
                  (clipsToDisplay.every((d) => d.url !== clip.url)
                    && ((freq[clip.creator] || 0) < 5)
                  ))
                if (c === undefined) {
                  return
                }
                clipsToDisplay.push(c)
                const index = this.props.clipsArray.clips.indexOf(c)
                clipsToDispayClipsArrayIndex.push(index)
                freq[c.creator] = (freq[c.creator] || 0) + 1
              })
              if (clipsToDisplay.length < this.state.items) {
                this.setState({
                  hasMore: false,
                  items: [...new Array(clipsToDisplay.length)]
                });
              }
              return (
                clipsToDisplay.map(
                  (clip, i) =>
                    <Element
                      key={i}
                      clip={clip}
                      clickHandler={this.props.clickHandler}
                      isCompilation={false}
                      id={i}
                      clip_id={clipsToDispayClipsArrayIndex[i]}
                    />
                ))
            })()}
          </InfiniteScroll>
        </Container>
      </div>
    );
  }
};
