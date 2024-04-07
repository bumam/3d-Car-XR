import { CAR_MODEL_PARAMS, COLORS_PARAMS } from '../contexts/CustomizationContext/const';
import { IColorParams, IModelParams } from '../contexts/CustomizationContext/interface';
import { useCustomization } from '../contexts';

const Configurator = () => {
  const { carModel, setCarModel, accessory, setAccessory, carColor, setCarColor } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_title">Car Options</div>
        <div className="configurator_section_values">
          {CAR_MODEL_PARAMS.map((item: IModelParams, index: number) => {
            return (
              <div
                key={index}
                className={`item ${item.model === carModel.model ? 'item-active' : ''}`}
                onClick={() => {
                  console.log('setCarModel', item);
                  setCarModel(item);
                }}
              >
                <div className="item_option">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Car Color</div>
        <div className="configurator_section_values">
          {COLORS_PARAMS.map((item: IColorParams, index: number) => (
            <div
              key={index}
              className={`item ${item.color === carColor.color ? 'item-active' : ''}`}
              onClick={() => {
                console.log('setColor', item);

                setCarColor(item);
                console.log('carColor', carColor);
              }}
            >
              <div
                className="item_colour_preview"
                style={{
                  backgroundColor: item.color,
                }}
              />
              <div className="item_option">{item.colorName}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Accessories</div>
        <div className="configurator_section_values">
          <div className={`item ${accessory === 1 ? 'item-active' : ''}`} onClick={() => setAccessory(1)}>
            <div className="item_option">Calipers - £1000</div>
          </div>
          <div className={`item ${accessory === 0 ? 'item-active' : ''}`} onClick={() => setAccessory(0)}>
            <div className="item_option">No Calipers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
