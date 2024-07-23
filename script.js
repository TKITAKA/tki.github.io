class ProjectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ modalVisible: true });
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    const { modalVisible } = this.state;
    const { title, byline, description, client, category } = this.props;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'li',
        { onClick: this.showModal },
        React.createElement(
          'a',
          null,
          React.createElement('h3', { className: 'projectlist--client' }, client),
          React.createElement('h4', { className: 'projectlist--byline' }, byline)
        )
      ),
      modalVisible && React.createElement(
        'div',
        { className: 'modal', style: { display: 'block' } },
        React.createElement(
          'div',
          { className: 'modal-content' },
          React.createElement(
            'span',
            { className: 'close', onClick: this.hideModal },
            '×'
          ),
          React.createElement('h2', null, title),
          React.createElement('p', null, description),
          React.createElement('p', null, 'Byline: ' + byline),
          React.createElement('p', null, 'Category: ' + category)
        )
      )
    );
  }
}

class ProjectList extends React.Component {
  render() {
    const projects = this.props.projects;

    return React.createElement(
      'div',
      { className: 'project-list' },
      React.createElement(
        'ul',
        { className: 'menu vertical' },
        projects.map(project =>
          React.createElement(ProjectComponent, {
            key: project.id,
            title: project.title,
            byline: project.byline,
            description: project.description,
            client: project.client,
            thumbnail: project.thumbnail,
            category: project.category,
            id: project.id
          })
        )
      )
    );
  }
}

class ProjectCategory extends React.Component {
  constructor(props) {
    super(props);

    this.setActive = this.setActive.bind(this);
  }

  setActive() {
    this.props.handleClick(this.props.index);
  }

  getWidth(isActive) {
    let w = !isActive ? 'calc(20vw - 20px)' : '500px';
    return w;
  }

  render() {
    const { active, focused, shiftLeft, isLast, cat } = this.props;

    const styles = {
      container: {
        transform: active
          ? 'scale(1.1) translate3d(0, 0, 0)'
          : 'scale(1) translate3d(0, 0, 0)'
      },
      item: {
        transform: focused && !active
          ? 'translate3d(' + (shiftLeft ? '-' : '') + '100%, 0, 0)'
          : 'translate3d(0, 0, 0)'
      },
      background: {
        background: 'url(' + cat.thumbnail + ') no-repeat center center',
        backgroundSize: 'cover',
        height: '500px',
        width: this.getWidth(active)
      }
    };

    const classes = classNames({ category: true, isActive: active, isLast, shiftLeft });

    return React.createElement(
      'li',
      { className: classes, style: styles.item },
      React.createElement(
        'div',
        { className: 'category--content' },
        React.createElement('h2', null, cat.title),
        React.createElement(ProjectList, { projects: cat.projects })
      ),
      React.createElement(
        'div',
        { className: 'category--image-container', onClick: this.setActive, style: styles.container },
        React.createElement('div', { className: 'category--image', style: styles.background })
      ),
      React.createElement(
        'div',
        { className: 'category--name' },
        React.createElement('h6', null, cat.name)
      ),
      React.createElement(
        'div',
        { className: 'category--closeButton' },
        React.createElement('a', { href: '#' }, 'Back')
      )
    );
  }
}

class Collection extends React.Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this.categoryNode = this.categoryNode.bind(this);
    this._focusOff = this._focusOff.bind(this);

    this.state = {
      open: false,
      activeIndex: null,
      categories: []
    };
  }

  componentDidMount() {
    this.setState({
      categories: [
        {
          title: "자기소개",
          name: "소개",
          thumbnail: "https://unsplash.it/1200/1200",
          projects: [
            {
              title: "자기소개",
              byline: "안녕하세요, 저는...",
              description: "저는 웹 개발자입니다...",
              client: "소개",
              thumbnail: "https://unsplash.it/1000/1000",
              category: "소개",
              id: "1"
            }
          ],
          id: "1"
        },
        {
          title: "기술",
          name: "기술",
          thumbnail: "https://unsplash.it/1200/1201",
          projects: [
            {
              title: "기술",
              byline: "프로그래밍 언어",
              description: "저는 여러 프로그래밍 언어를 사용합니다...",
              client: "기술",
              thumbnail: "https://unsplash.it/1000/1001",
              category: "기술",
              id: "2"
            }
          ],
          id: "2"
        },
        {
          title: "경력",
          name: "경력",
          thumbnail: "https://unsplash.it/1200/1202",
          projects: [
            {
              title: "경력",
              byline: "이전 직장",
              description: "저는 다양한 회사에서 근무했습니다...",
              client: "경력",
              thumbnail: "https://unsplash.it/1000/1002",
              category: "경력",
              id: "3"
            }
          ],
          id: "3"
        },
        {
          title: "프로젝트",
          name: "프로젝트",
          thumbnail: "https://unsplash.it/1200/1203",
          projects: [
            {
              title: "프로젝트",
              byline: "주요 프로젝트",
              description: "제가 진행한 주요 프로젝트는 다음과 같습니다...",
              client: "프로젝트",
              thumbnail: "https://unsplash.it/1000/1003",
              category: "프로젝트",
              id: "4"
            }
          ],
          id: "4"
        },
        {
          title: "프로필",
          name: "프로필",
          thumbnail: "https://unsplash.it/1200/1204",
          projects: [
            {
              title: "프로필",
              byline: "개인 정보",
              description: "제 프로필 정보입니다...",
              client: "프로필",
              thumbnail: "https://unsplash.it/1000/1004",
              category: "프로필",
              id: "5"
            }
          ],
          id: "5"
        }
      ]
    });
  }

  _handleClick(i) {
    this.setState({
      activeIndex: i,
      open: true
    });
  }

  _focusOff(e) {
    e.preventDefault();
    if (e.target.className !== 'category--image') {
      this.setState({
        activeIndex: null,
        open: false
      });
    }
  }

  categoryNode(cat, i) {
    let isLast = i === this.state.categories.length - 1 || i === this.state.categories.length - 2;
    let shiftLeft = i < this.state.activeIndex;

    return React.createElement(ProjectCategory, {
      cat: cat,
      key: 'cat-' + i,
      handleClick: this._handleClick,
      active: i === this.state.activeIndex,
      focusOff: this._focusOff,
      focused: this.state.open,
      shiftLeft: shiftLeft,
      index: i,
      isLast: isLast
    });
  }

  render() {
    let catNodes = this.state.categories.map(this.categoryNode);
    let classes = classNames({ focused: this.state.open });

    return React.createElement(
      'div',
      { className: 'categories--menu-container ' + classes, onClick: this._focusOff, style: { height: window.innerHeight } },
      React.createElement(
        'ul',
        { className: 'categories menu' },
        catNodes
      )
    );
  }
}

class App extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(Collection, null)
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));
