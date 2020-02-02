import React, { Component } from 'react';
import { FaGithub, FaPlus, FaSpinner, FaRegCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, ContainerChild, Form, List, SubmitButton, Footer } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  };

  // Salvar os dados do localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });

    console.log(response.data);
  };

  render() {
    const { newRepo, repositories, loading } = this.state;

    return (
      <Container>
        <ContainerChild>
          <h1>
            Repositories
            <FaGithub className="git-icon" />
          </h1>

          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="  Add Repository"
              value={newRepo}
              onChange={this.handleInputChange}
            />

            <SubmitButton loading={loading}>

              {loading ? (
                <FaSpinner color="#fff" size={14} />
              ) : (
                  <FaPlus color="#222" size={12} />
                )}
            </SubmitButton>
          </Form>

          <List>
            {repositories.map(repository => (
              <li key={repository.name}>
                <span>
                  {repository.name}
                </span>
                <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                  Details
                </Link>
              </li>
            ))}
          </List>
        </ContainerChild>
        <Footer>
          <h5>
            <FaRegCopyright size={13} />
            DevSolutions 2020
          </h5>
        </Footer>
      </Container>
    );
  }
}
