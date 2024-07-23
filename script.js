/**
 * 환영합니다! 이 Pen은 ES6 기능과 더 깔끔한 코드로 업데이트되었습니다.
 * https://codepen.io/nevernotsean/pen/QodqGj
 */

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
    const { byline, description, client, category } = this.props;
    return (
      <div>
        <li onClick={this.showModal}>
          <a>
            <h3 className="projectlist--client">{client}</h3>
            <h4 className="projectlist--byline">{byline}</h4>
          </a>
        </li>
        {modalVisible && (
          <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content">
              <span className="close" onClick={this.hideModal}>&times;</span>
              <h2>{client}</h2>
              <p>{description}</p>
              <p>Byline: {byline}</p>
              <p>Category: {category}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

class ProjectList extends React.Component {
  render() {
    const projects = [
      {
        byline: "ut ullamco sunt",
        description: "Enim est qui Lorem officia adipisicing irure minim.",
        client: "pariatur",
        thumbnail: "https://unsplash.it/1000/1000",
        category: "aute",
        id: "58653533ca121cbaf664b199"
      },
      {
        byline: "consectetur aute aliquip",
        description: "Reprehenderit in mollit fugiat cupidatat consectetur minim Lorem eiusmod commodo laboris dolor minim tempor eiusmod.",
        client: "et",
        thumbnail: "https://unsplash.it/1000/1001",
        category: "nisi",
        id: "58653533702dae7921a80c46"
      },
      {
        byline: "eiusmod ullamco commodo",
        description: "Ullamco minim occaecat officia anim laborum laboris velit cupidatat esse aliqua irure exercitation.",
        client: "magna",
        thumbnail: "https://unsplash.it/1000/1002",
        category: "consectetur",
        id: "58653533e961f59631955144"
      },
      {
        byline: "culpa tempor commodo",
        description: "Cupidatat incididunt laborum cillum ea dolore quis.",
        client: "sint",
        thumbnail: "https://unsplash.it/1000/1003",
        category: "do",
        id: "58653533c66184064ccedc40"
      },
      {
        byline: "ex deserunt est",
        description: "Eu ullamco anim adipisicing duis adipisicing sint sit incididunt pariatur sit.",
        client: "occaecat",
        thumbnail: "https://unsplash.it/1000/1004",
        category: "sit",
        id: "586535332e3781792a099619"
      }
    ];

    return (
      <div className="project-list">
        <ul className="menu vertical">
          {projects.map(project => (
            <ProjectComponent
              key={project.id}
              byline={project.byline}
              description={project.description}
              client={project.client}
              thumbnail={project.thumbnail}
              category={project.category}
              id={project.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class ProjectCategory extends React.Component {
  constructor(props) {
    super(props);

    this.setActive = this.setActive.bind(this);

    this.state = {
      projects: []
    };
  }

  setActive() {
    this.props.handleClick(this.props.Index);
  }

  getWidth(isActive) {
    let w = !isActive ? 'calc(20vw - 20px)' : '500px';
    return w;
  }

  render() {
    let { active, focused, shiftLeft, isLast } = this.props;

    let styles = {
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
        background: 'url(' + this.props.cat.thumbnail + ') no-repeat center center',
        backgroundSize: 'cover',
        height: '500px',
        width: this.getWidth(active)
      }
    };

    let classes = classNames({ category: true, isActive: active, isLast, shiftLeft });

    return (
      <li className={classes} style={styles.item}>
        <div className="category--content">
          <h2>{this.props.cat.name}</h2>
          <ProjectList />
        </div>
        <div className="category--image-container" onClick={this.setActive} style={styles.container}>
          <div className="category--image" style={styles.background}></div>
        </div>
        <div className="category--name">
          <h6>{this.props.cat.name}</h6>
        </div>
        <div className="category--closeButton">
          <a href="#">Back</a>
        </div>
      </li>
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
          "thumbnail": "https://unsplash.it/1200/1200",
          "link": "http://seanma.de",
          "taxonomy": "category",
          "count": 6,
          "name": "consequat",
          "slug": "commodo",
          "id": "586537da62981d5fb8c21617"
        },
        {
          "thumbnail": "https://unsplash.it/1200/1201",
          "link": "http://seanma.de",
          "taxonomy": "category",
          "count": 8,
          "name": "non",
          "slug": "laborum",
          "id": "586537da60c040bc1e3060a1"
        },
        {
          "thumbnail": "https://unsplash.it/1200/1202",
          "link": "http://seanma.de",
          "taxonomy": "category",
          "count": 3,
          "name": "non",
          "slug": "commodo",
          "id": "586537daffc67c66ec4dc356"
        },
        {
          "thumbnail": "https://unsplash.it/1200/1203",
          "link": "http://seanma.de",
          "taxonomy": "category",
          "count": 6,
          "name": "velit",
          "slug": "voluptate",
          "id": "586537dae1be34396786ce5f"
        },
        {
          "thumbnail": "https://unsplash.it/1200/1204",
          "link": "http://seanma.de",
          "taxonomy": "category",
          "count": 2,
          "name": "non",
          "slug": "voluptate",
          "id": "586537dab274a22da2f3edae"
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

    return (
      <ProjectCategory
        cat={cat}
        key={'cat-' + i}
        handleClick={this._handleClick}
        active={i === this.state.activeIndex}
        focusOff={this._focusOff}
        focused={this.state.open}
        shiftLeft={shiftLeft}
        Index={i}
        isLast={isLast}
      />
    );
  }

  render() {
    let catNodes = this.state.categories.map(this.categoryNode);
    let classes = classNames({ focused: this.state.open });

    return (
      <div className={'categories--menu-container ' + classes} onClick={this._focusOff} style={{ height: window.innerHeight }}>
        <ul className="categories menu">
          {catNodes}
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Collection />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
