import { Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import Category from '../../types/Category'
import {WHITE} from "../../utils/constants";

interface ProjectCardProps {
  title: string;
  description: string;
  categories: Category[];
  github?: string;
  deploy?: string;
  img: string;
  link?: string;
  position: number;
}

const CardWrapper = styled.div`
  width: 100%;
`;

const CardImg = styled.img`
  object-fit: contain;
  width: 100%;
  padding: 20px;
  border-radius: 30px;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
  & > * {
    padding-bottom: 10px;
  }
`;

const CardCatergories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  justify-content: center;
  & > * {
    margin: 5px;
  }
`;

const CardExternalLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 -10px;
  & > * {
    margin: 0 10px;
  }
`;

const CategoryWrapper = styled.div<{ colour: string }>`
  background-color: ${(props) => props.colour};
  padding: 3px 20px;
  border-radius: 15px;
  color: #333;
`;

const ProjectCard = ({title, description, github, deploy, categories, link}: ProjectCardProps) => {
  return(
    <CardWrapper>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <CardCatergories>
              {categories.map((category) => (
                <CategoryWrapper colour={category.color} key={category.title}>
                  <Typography variant="subtitle2" color={WHITE}>{category.title}</Typography>
                </CategoryWrapper>
              ))}
            </CardCatergories>
            <Typography variant="body1" align="inherit">
              {description}
            </Typography>
            <CardExternalLinks>
              {github && (
                <a href={github} target="_blank" rel="noreferrer">
                  <FaGithub size="1.8rem" />
                </a>
              )}
              {deploy && (
                <a href={deploy} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt size="1.8rem" />
                </a>
              )}
              {link && (
                <a href={link} target="_blank" rel="noreferrer">
                  <FaInfoCircle size="1.8rem" />
                </a>
              )}
            </CardExternalLinks>
          </CardContent>
        </Grid>
      </Grid>
    </CardWrapper>
  )
}

export default ProjectCard