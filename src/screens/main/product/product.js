import React, { Component } from 'react';

import { View, FlatList, ActivityIndicator } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";

class Product extends Component {
    _isMounted = false;
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false,
        search: ''
      };
    }
  
    componentDidMount() {
        this._isMounted = true;

        if (this._isMounted) {
            this.makeRemoteRequest();
            console.log("mount");
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
  
    makeRemoteRequest = () => {
      const { page, seed } = this.state;
      const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
      this.setState({ loading: true });
  
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: page === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            loading: false,
            refreshing: false
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    };
  
    handleRefresh = () => {
      this.setState(
        {
          page: 1,
          seed: this.state.seed + 1,
          refreshing: true
        },
        () => {
          this.makeRemoteRequest();
        }
      );
    };
  
    handleLoadMore = () => {
      this.setState(
        {
          page: this.state.page + 1
        },
        () => {
          this.makeRemoteRequest();
        }
      );
    };
  
    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "86%",
            backgroundColor: "#CED0CE",
            marginLeft: "14%"
          }}
        />
      );
    };

    updateSearch = search => {
        this.setState({ search });
    };
  
    renderHeader = () => {
      return <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                lightTheme={true}
                value={this.state.search}
            />;
    };
  
    renderFooter = () => {
      if (!this.state.loading) return null;
  
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
          }}
        >
          <ActivityIndicator animating size="large" />
        </View>
      );
    };
  
    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                    <ListItem
                        roundAvatar
                        leftAvatar={{ source: {uri: item.picture.thumbnail} }}
                        title={`${item.name.first} ${item.name.last}`}
                        subtitle={item.email}
                        containerStyle={{ borderBottomWidth: 0 }}
                        chevron
                    />
                    )}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={5}
                />
            </View>
        );
    }
}
  
export default Product;