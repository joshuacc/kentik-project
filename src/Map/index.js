import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./Map.css";

/**
 * @param {Object} props
 * @param {Object} props.geo A GeoJSON object
 */
export const Map = ({ geo }) => {
  const svgRef = useRef(null);
  useEffect(() => {
    if (geo) {
      const projection = d3.geoEquirectangular().fitExtent([[0,0], [500, 500]], geo);
      const geoGenerator = d3.geoPath().projection(projection);

      const f = d3.select("#map g").selectAll("path").data(geo.features);

      console.log("f", f);
      f.enter().append("path").attr("d", geoGenerator);
    }
  }, [geo]);

  return (
    <svg id="map" ref={svgRef} width="500" height="500">
      <g></g>
    </svg>
  );
};
