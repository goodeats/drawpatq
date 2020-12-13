import React from "react";
import ManyTriangles from '../components/Canvas/projects/triangles/ManyTriangles';
import LittleTriangles from '../components/Canvas/projects/triangles/LittleTriangles';
import TooManyTriangles from '../components/Canvas/projects/triangles/TooManyTriangles';
import ColorTriangles from '../components/Canvas/projects/triangles/ColorTriangles';
import ShadedTriangles from '../components/Canvas/projects/triangles/ShadedTriangles';
import TintedTriangles from '../components/Canvas/projects/triangles/TintedTriangles';
import ShadedAndTintedTriangles from '../components/Canvas/projects/triangles/ShadedAndTintedTriangles';
import AlignedTriangles from "../components/Canvas/projects/triangles/AlignedTriangles";
import ClusteredTriangles from "../components/Canvas/projects/triangles/ClusteredTriangles";
import USATriangles from '../components/Canvas/projects/triangles/USATriangles';
import XmasTreeTriangles from '../components/Canvas/projects/triangles/XmasTreeTriangles';

const Navigation = {
  hello: function () {
    console.log("hi from navigation");
  },

  projects: [
    ['triangles', <ManyTriangles />],
    ['little triangles', <LittleTriangles />],
    ['too many triangles', <TooManyTriangles />],
    ['transparent triangles', <ColorTriangles />],
    ['shaded triangles', <ShadedTriangles />],
    ['tinted triangles', <TintedTriangles />],
    ['shades and tints', <ShadedAndTintedTriangles />],
    ['in a row', <AlignedTriangles />],
    ['clustered', <ClusteredTriangles />],
    ['usa', <USATriangles />],
    ['xmas', <XmasTreeTriangles />],
    // groups of colors
    // rainbow
    // moving random absolute positions
  ],

  projectTitles: function(){
    return this.projects.map((project) => { return project[0]; });
  },

  getComponent: function(title){
    const project = this.projects.find((project) => { return project[0] === title; })
    return project[1];
  }

};

export default Navigation;
