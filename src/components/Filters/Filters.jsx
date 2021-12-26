import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
import { modelsContext } from "../../contexts/modelsContext";

const Filters = ({ model, setModel, price, setPrice }) => {
  const { getModels, models } = useContext(modelsContext);
  useEffect(() => {
    getModels();
  }, []);
  return (
    <div style={{ marginTop: "20px" }}>
      <Select
        allowClear
        style={{ width: "100%" }}
        value={model}
        onChange={(e) => setModel(e)}
        mode="multiple"
        placeholder="Models"
      >
        {models.map((item) => (
          <Select.Option value={item.model} key={item.id}>
            {item.model}
          </Select.Option>
        ))}
      </Select>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        range
        defaultValue={[1, 10000]}
        min={0}
        max={10000}
        step={1}
      />
      <h6>Price</h6>
    </div>
  );
};

export default Filters;
