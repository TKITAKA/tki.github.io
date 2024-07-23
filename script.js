/**
 * 환영합니다! 이 Pen은 ES6 기능과 더 깔끔한 코드로 업데이트되었습니다.
 * https://codepen.io/nevernotsean/pen/QodqGj
 */

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedProject: null
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(project) {
    this.setState({ modalVisible: true, selectedProject: project });
  }

  hideModal() {
    this.setState({ modalVisible: false, selectedProject: null });
  }

  createProjectListItem(project) {
    let byline = project.acf.project_byline;
    let client = project.acf.project_client;
    return /*#__PURE__*/(
      React.createElement("li", { key: 'project-' + project.id, onClick: () => this.showModal(project) }, /*#__PURE__*/
      React.createElement("a", { to: '/projects/' + project.slug }, /*#__PURE__*/
      React.createElement("h3", { className: "projectlist--client" }, client), /*#__PURE__*/
      React.createElement("h4", { className: "projectlist--byline" }, byline))));
  }

  render() {
    const { modalVisible, selectedProject } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: "project-list" }, /*#__PURE__*/
      React.createElement("ul", { className: "menu vertical" },
      this.props.projects.map(this.createProjectListItem.bind(this))),
      modalVisible && /*#__PURE__*/(
        React.createElement("div", { className: "modal", style: { display: 'block' } }, /*#__PURE__*/
        React.createElement("div", { className: "modal-content" }, /*#__PURE__*/
        React.createElement("span", { className: "close", onClick: this.hideModal }, "\xD7"), /*#__PURE__*/
        React.createElement("h2", null, selectedProject.acf.project_client), /*#__PURE__*/
        React.createElement("p", null, selectedProject.acf.project_description), /*#__PURE__*/
        React.createElement("p", null, "Byline: ", selectedProject.acf.project_byline), /*#__PURE__*/
        React.createElement("p", null, "Category: ", selectedProject.acf.project_category)
        ))
      )
    ));
  }
}

class ProjectCategory extends React.Component {
  constructor(props) {
    super(props);

    this.setActive = this.setActive.bind(this);

    this.state = {
      projects: [] };
  }

  componentWillMount() {
    this.setState({
      projects: [
        { 
          "acf": { 
            "project_byline": "ut ullamco sunt", 
            "project_description": "Enim est qui Lorem officia adipisicing irure minim.", 
            "project_client": "pariatur", 
            "project_thumbnail": "https://unsplash.it/1000/1000", 
            "project_category": "aute" 
          }, 
          "id": "58653533ca121cbaf664b199" 
        }, 
        { 
          "acf": { 
            "project_byline": "consectetur aute aliquip", 
            "project_description": "Reprehenderit in mollit fugiat cupidatat consectetur minim Lorem eiusmod commodo laboris dolor minim tempor eiusmod.", 
            "project_client": "et", 
            "project_thumbnail": "https://unsplash.it/1000/1001", 
            "project_category": "nisi" 
          }, 
          "id": "58653533702dae7921a80c46" 
        }, 
        { 
          "acf": { 
            "project_byline": "eiusmod ullamco commodo", 
            "project_description": "Ullamco minim occaecat officia anim laborum laboris velit cupidatat esse aliqua irure exercitation.", 
            "project_client": "magna", 
            "project_thumbnail": "https://unsplash.it/1000/1002", 
            "project_category": "consectetur" 
          }, 
          "id": "58653533e961f59631955144" 
        }, 
        { 
          "acf": { 
            "project_byline": "culpa tempor commodo", 
            "project_description": "Cupidatat incididunt laborum cillum ea dolore quis.", 
            "project_client": "sint", 
            "project_thumbnail": "https://unsplash.it/1000/1003", 
            "project_category": "do" 
          }, 
          "id": "58653533c66184064ccedc40" 
        }, 
        { 
          "acf": { 
            "project_byline": "ex deserunt est", 
            "project_description": "Eu ullamco anim adipisicing duis adipisicing sint sit incididunt pariatur sit.", 
            "project_client": "occaecat", 
            "project_thumbnail": "https://unsplash.it/1000/1004", 
            "project_category": "sit" 
          }, 
          "id": "586535332e3781792a099619" 
        }
      ]
    });
  }

  getProjects() {
    let catid = this.props.cat.id;
    let url = 'http://beta.json-generator.com/api/json/get/EyrhxmRVz';
    fetch(url).then(response => response.json()).
    then(json => {this.setState({ projects: json });});
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
        transform: function () {
          return active ?
          'scale(1.1) translate3d(0, 0, 0)' :
          'scale(1) translate3d(0, 0, 0)';
        }() },
      item: {
        transform: function () {
          let direction = shiftLeft ? '-' : '';
          let transform = focused && !active ? 'translate3d(' + direction + '100%, 0, 0)' : 'translate3d(0, 0, 0)';
          return transform;
        }() },
      background: {
        background: 'url(' + this.props.cat.thumbnail + ') no-repeat center center',
        backgroundSize: 'cover',
        height: '500px',
        width: this.getWidth(active) } };


    let classes = classNames({ category: true, isActive: active, isLast, shiftLeft });
    return /*#__PURE__*/(
      React.createElement("li", { className: classes, style: styles.item }, /*#__PURE__*/
      React.createElement("div", { className: "category--content" }, /*#__PURE__*/
      React.createElement("h2", null, this.props.cat.name), /*#__PURE__*/
      React.createElement(ProjectList, { projects: this.state.projects })), /*#__PURE__*/

      React.createElement("div", { className: "category--image-container", onClick: this.setActive, style: styles.container }, /*#__PURE__*/
      React.createElement("div", { className: "category--image", style: styles.background })), /*#__PURE__*/

      React.createElement("div", { className: "category--name" }, /*#__PURE__*/
      React.createElement("h6", null, this.props.cat.name)), /*#__PURE__*/

      React.createElement("div", { className: "category--closeButton" }, /*#__PURE__*/
      React.createElement("a", { href: "#" }, "Back"))));
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
      categories: [] };
  }

  componentDidMount() {
    this.setState({
      categories: [{ "thumbnail": "https://unsplash.it/1200/1200", "link": "http://seanma.de", "taxonomy": "category", "count": 6, "name": "consequat", "slug": "commodo", "id": "586537da62981d5fb8c21617" }, { "thumbnail": "https://unsplash.it/1200/1201", "link": "http://seanma.de", "taxonomy": "category", "count": 8, "name": "non", "slug": "laborum", "id": "586537da60c040bc1e3060a1" }, { "thumbnail": "https://unsplash.it/1200/1202", "link": "http://seanma.de", "taxonomy": "category", "count": 3, "name": "non", "slug": "commodo", "id": "586537daffc67c66ec4dc356" }, { "thumbnail": "https://unsplash.it/1200/1203", "link": "http://seanma.de", "taxonomy": "category", "count": 6, "name": "velit", "slug": "voluptate", "id": "586537dae1be34396786ce5f" }, { "thumbnail": "https://unsplash.it/1200/1204", "link": "http://seanma.de", "taxonomy": "category", "count": 2, "name": "non", "slug": "voluptate", "id": "586537dab274a22da2f3edae" }] });
  }

  _getCategories() {
    let _this = this;
    let url = 'http://beta.json-generator.com/api/json/get/E1NpHQAEf';
    fetch(url).then(response => response.json()).
    then(json => {_this.setState({ categories: json });});
  }

  _handleClick(i) {
    this.setState({
      activeIndex: i,
      open: true });
  }

  _focusOff(e) {
    e.preventDefault();
    if (e.target.className !== 'category--image') {
      this.setState({
        activeIndex: null,
        open: false });
    }
  }

  categoryNode(cat, i) {
    let isLast = i === this.state.categories.length - 1 || i === this.state.categories.length - 2;
    let shiftLeft = i < this.state.activeIndex;

    return /*#__PURE__*/(
      React.createElement(ProjectCategory, {
        cat: cat,
        key: 'cat-' + i,
        handleClick: this._handleClick,
        active: i === this.state.activeIndex,
        focusOff: this._focusOff,
        focused: this.state.open,
        shiftLeft: shiftLeft,
        Index: i,
        isLast: isLast }));
  }

  render() {
    let catNodes = this.state.categories.map(this.categoryNode);
    let classes = classNames({
      focused: this.state.open });

    return /*#__PURE__*/(
      React.createElement("div", { className: 'categories--menu-container ' + classes, onClick: this._focusOff, style: { height: window.innerHeight } }, /*#__PURE__*/
      React.createElement("ul", { className: "categories menu" },
      catNodes)));
  }
}

class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement(Collection, null)));
  }
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#root"));
