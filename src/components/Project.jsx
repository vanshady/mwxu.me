const React = require('react');

const projects = require('./portfolio.json');

const Project = React.createClass({
    componentDidMount() {
        this.props.activateProjectsTab();
    },
    componentDidUpdate() {
        // window.scrollTo(0, 0);
    },
    render() {
        let key = 0;
        const year = this.props.params.name.slice(0, 4);
        const name = this.props.params.name.slice(5);
        const project = projects[year].filter((v) => {
            return v.label === name;
        })[0];
        const time = `${project.month} ${year}`;
        const image = () => {
            if (project.video) {
                return <div dangerouslySetInnerHTML={{ __html: project.video }}></div>;
            } else if (project.img) {
                if (project.link) {
                    return (<a href={project.link}><img src={project.img} alt={name} className="fullimg" /></a>);
                } else if (project.code) {
                    return (<a href={project.code}><img src={project.img} alt={name} className="fullimg" /></a>);
                }

                return (<img src={project.img} alt={name} className="fullimg" />);
            }

            return null;
        };

        const paragraphs = project.desc.map((p) => {
            key++;
            return (
                <p key={key} dangerouslySetInnerHTML={{ __html: p }}></p>
            );
        });
        const link = () => {
            if (project.link) {
                return (<p>Demo: <a href={project.link}>{project.link}</a></p>);
            }

            return null;
        };
        const code = () => {
            if (project.code) {
                return (<p>Code: <a href={project.code}>{project.code}</a></p>);
            }

            return null;
        };
        return (
            <div>
                <article>
                    <h1>{name}</h1>
                    <div className="body">
                        {image()}
                        {paragraphs}
                        {link()}
                        {code()}
                        <p>
                            <time pubdate>{time}</time>
                        </p>
                    </div>
                </article>
                {/* <Projects /> */}
            </div>
        );
    },
});

module.exports = Project;
