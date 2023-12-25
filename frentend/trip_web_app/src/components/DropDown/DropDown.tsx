import React, { Component, createRef, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import ArrowUpIcon from '../../icons/ArrowUpIcon';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import CheckIcon from '../../icons/CheckIcon';
interface ListItem {
  value: string;
  label: string;
}

interface DropdownProps {
  id?: string;
  title: string;
  list: ListItem[];
  name: string;
  onChange: (item: ListItem | null, name: string) => void;
  select?: ListItem;
  searchable?: [string, string] | undefined;
  styles?: {
    wrapper?: React.CSSProperties;
    header?: React.CSSProperties;
    headerTitle?: React.CSSProperties;
    headerArrowUpIcon?: React.CSSProperties;
    headerArrowDownIcon?: React.CSSProperties;
    checkIcon?: React.CSSProperties;
    list?: React.CSSProperties;
    listSearchBar?: React.CSSProperties;
    scrollList?: React.CSSProperties;
    listItem?: React.CSSProperties;
    listItemNoResult?: React.CSSProperties;
  };
  arrowUpIcon?: React.ReactNode | null;
  arrowDownIcon?: React.ReactNode | null;
  checkIcon?: React.ReactNode | null;
}

interface DropdownState {
  isListOpen: boolean;
  title: string;
  selectedItem: ListItem | null;
  keyword: string;
  list: ListItem[];
}

class Dropdown extends Component<DropdownProps, DropdownState> {
  private searchField = createRef<HTMLInputElement>();

  constructor(props: DropdownProps) {
    super(props);

    const { title, list } = this.props;

    this.state = {
      isListOpen: false,
      title,
      selectedItem: null,
      keyword: '',
      list,
    };
  }

  componentDidMount() {
    const { select } = this.props;

    if (select) {
      this.selectSingleItem(select);
    }
  }

  componentDidUpdate() {
    const { isListOpen } = this.state;

    setTimeout(() => {
      if (isListOpen) {
        window.addEventListener('click', this.close);
      } else {
        window.removeEventListener('click', this.close);
      }
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.close);
  }

  static getDerivedStateFromProps(nextProps: DropdownProps, prevState: DropdownState) {
    const { list } = nextProps;

    if (JSON.stringify(list) !== JSON.stringify(prevState.list)) {
      return { list };
    }

    return null;
  }

  close = () => {
    this.setState({
      isListOpen: false,
    });
  };

  clearSelection = () => {
    const { name, title, onChange } = this.props;

    this.setState(
      {
        selectedItem: null,
        title,
      },
      () => {
        onChange(null, name);
      }
    );
  };

  selectSingleItem = (item: ListItem) => {
    const { list } = this.props;

    const selectedItem = list.find((i) => i.value === item.value);
    if(selectedItem)
    this.selectItem(selectedItem);
  };

  selectItem = (item: ListItem) => {
    const { label, value } = item;
    const { list, selectedItem } = this.state;
    const { name, onChange } = this.props;

    let foundItem;

    if (!label) {
      foundItem = list.find((i) => i.value === item.value);
    }

    this.setState(
      {
        title: label || (foundItem && foundItem.label) || '',
        isListOpen: false,
        selectedItem: item,
      },
      () => selectedItem?.value !== value && onChange(item, name)
    );
  };

  toggleList = () => {
    this.setState(
      (prevState) => ({
        isListOpen: !prevState.isListOpen,
        keyword: '',
      }),
      () => {
        if (this.state.isListOpen && this.searchField.current) {
          this.searchField.current.focus();
          this.setState({
            keyword: '',
          });
        }
      }
    );
  };

  filterList = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      keyword: e.target.value.toLowerCase(),
    });
  };

  listItems = () => {
    const {
      id,
      searchable,
      checkIcon,
      styles,
    } = this.props;
    const { listItem, listItemNoResult } = styles || {};
    const { keyword, list } = this.state;
    let tempList = [...list];
    const selectedItemValue = this.state.selectedItem?.value;

    if (keyword.length) {
      tempList = list.filter((item) => item.label.toLowerCase().includes(keyword.toLowerCase()));
    }

    if (tempList.length) {
      return tempList.map((item) => (
        <button
          type="button"
          className={`dd-list-item ${id}`}
          style={listItem}
          key={item.value}
          onClick={() => this.selectItem(item)}
        >
          {item.label}
          {' '}
          {item.value === selectedItemValue && (
            <span style={styles?.checkIcon}>{checkIcon || <CheckIcon />}</span>
          )}
        </button>
      ));
    }

    return (
      <div
        className={`dd-list-item no-result ${id}`}
        style={listItemNoResult}
      >
        {searchable && searchable[1]}
      </div>
    );
  };

  render() {
    const {
      id,
      searchable,
      arrowUpIcon,
      arrowDownIcon,
      styles,
    } = this.props;
    const { isListOpen, title } = this.state;

    const {
      wrapper,
      header,
      headerTitle,
      headerArrowUpIcon,
      headerArrowDownIcon,
      list,
      listSearchBar,
      scrollList,
    } = styles || {};

    return (
      <div
        className={`dd-wrapper ${id}`}
        style={wrapper}
      >
        <button
          type="button"
          className={`dd-header ${id}`}
          style={header}
          onClick={this.toggleList}
        >
          <div
            className={`dd-header-title ${id}`}
            style={headerTitle}
          >
            {title}
          </div>
          {isListOpen
            ? <span style={headerArrowUpIcon}>{arrowUpIcon || <ArrowUpIcon />}</span>
            : <span style={headerArrowDownIcon}>{arrowDownIcon || <ArrowDownIcon />}</span>}
        </button>
        {isListOpen && (
          <div
            className={`dd-list${searchable ? ' searchable' : ''} ${id}`}
            style={list}
          >
            {searchable
              && (
                <input
                  ref={this.searchField}
                  className={`dd-list-search-bar ${id}`}
                  style={listSearchBar}
                  placeholder={searchable[0]}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => this.filterList(e)}
                />
              )}
            <div
              className={`dd-scroll-list ${id}`}
              style={scrollList}
            >
              {this.listItems()}
            </div>
          </div>
        )}
      </div>
    );
  }
}
  
  export default Dropdown;