import React from 'react';
import PropTypes from 'prop-types';
import { createLottery, updateLottery, deleteLottery } from 'actions';

class LotteryEditView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      height: props.lottery ? props.lottery.height : 0,
      imageUrl: props.lottery ? props.lottery.imageUrl : '',
      width: props.lottery ? props.lottery.width : 0,
      shape: props.lottery ? props.lottery.shape : [],
      user: props.lottery ? props.lottery.user : [],
      status: props.lottery ? props.lottery.status : 1,
      cost: props.lottery ? props.lottery.cost : 1,
      donationPercent: props.lottery ? props.lottery.donationPercent : 10,
      donationWallet: props.lottery ? props.lottery.donationWallet : '0x00000000000000000000',
      items: props.lottery ? props.lottery.items : [],
      item: {
        itemImageUrl: ''
      },
      modal_active: false,
    };
    this.item = {
      itemName: {},
      itemPrice: {},
      itemShipCost: {},
      itemDescription: {},
    };
  }

  componentDidMount() {
    $('.m_selectpicker').selectpicker();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      height: nextProps.lottery ? nextProps.lottery.height : 0,
      imageUrl: nextProps.lottery ? nextProps.lottery.imageUrl : '',
      width: nextProps.lottery ? nextProps.lottery.width : 0,
      shape: nextProps.lottery ? nextProps.lottery.shape : [],
      user: nextProps.lottery ? nextProps.lottery.user : [],
      status: nextProps.lottery ? nextProps.lottery.status : 1,
      cost: nextProps.lottery ? nextProps.lottery.cost : 1,
      donationPercent: nextProps.lottery ? nextProps.lottery.donationPercent : 10,
      donationWallet: nextProps.lottery ? nextProps.lottery.donationWallet : '0x00000000000000000000',
      items: nextProps.lottery ? nextProps.lottery.items : [],
      item: {
        itemImageUrl: '',
      },
    });
  }

  fileUpload = () => {
    $('#m-dropzone__button').click();
  };

  itemUpload = () => {
    $('#m-item__button').click();
  };

  handleImageChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  handleItemChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      const { item } = this.state;
      item.itemImageUrl = reader.result;
      this.setState({
        item: Object.assign({}, item),
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  setHeight = (e) => {
    this.setState({ height: parseInt(e.target.value, 10) });
  };

  setWidth = (e) => {
    this.setState({ width: parseInt(e.target.value, 10) });
  };

  setStatus = (status) => {
    const { changeView, dispatch, lottery } = this.props;
    const { height, imageUrl, width, shape, user, cost, donationPercent, donationWallet, items } = this.state;
    dispatch(updateLottery({
      id: lottery.id,
      height,
      imageUrl,
      name: 'Lottery',
      width,
      shape,
      user,
      status,
      cost,
      donationPercent,
      donationWallet,
      items,
    }));
    changeView(-1);
  };

  setCost = (e) => {
    this.setState({ cost: parseFloat(e.target.value) });
  };

  setDonationPercent = (e) => {
    this.setState({ donationPercent: parseInt(e.target.value, 10) });
  };

  setDonationWallet = (e) => {
    this.setState({ donationWallet: e.target.value });
  };

  convertImage = (index) => {
    const { admin, username } = this.props;
    const { shape, user, status } = this.state;

    if (!admin && status > 2) {
      return;
    }

    if (admin) {
      const clone = shape.filter((value) => value !== index);
      if (clone.length === shape.length) {
        clone.push(index);
      }
      this.setState({ shape: clone });
    }
    else {
      let clone = user.filter((value) => value.index !== index);
      if (clone.length === user.length) {
        clone.push({ user: username, index });
      }
      else {
        clone = user.filter((value) => value.index !== index || value.user !== username);
      }
      this.setState({ user: clone });
    }
  };

  tableContent = () => {
    const { height, shape, width, user } = this.state;
    const { admin, username } = this.props;
    const result = [];
    const heightArray = Array.from(new Array(height), (val, index) => index);
    const widthArray = Array.from(new Array(width), (val, index) => index);
    heightArray.map((i) => {
      const row = [];
      widthArray.map((j) => {
        if (admin) {
          if (shape.includes(i * width + j)) {
            return row.push(<td key={j} onClick={() => this.convertImage(i * width + j)} className="converted" />);
          }
        }
        else if (user.filter((value) => value.index === i * width + j && value.user === username).length) {
          return row.push(<td key={j} onClick={() => this.convertImage(i * width + j)} className="selected" />);
        }
        else if (user.filter((value) => value.index === i * width + j).length) {
          return row.push(<td key={j} onClick={() => this.convertImage(i * width + j)} className="converted" />);
        }
        return row.push(<td key={j} onClick={() => this.convertImage(i * width + j)} />);
      }, this);
      return result.push(<tr key={i}>{row}</tr>);
    }, this);
    return result;
  };

  deleteLottery = () => {
    const { changeView, dispatch, lottery } = this.props;
    if (lottery) {
      dispatch(deleteLottery(lottery.id));
    }
    changeView(-1);
  };

  createLottery = (e) => {
    e.preventDefault();
    const { changeView, dispatch, lottery } = this.props;
    const { height, imageUrl, width, shape, user, status, cost, donationPercent, donationWallet, items } = this.state;
    if (lottery) {
      dispatch(updateLottery({
        id: lottery.id,
        height,
        imageUrl,
        name: 'Lottery',
        width,
        shape,
        user,
        status,
        cost,
        donationPercent,
        donationWallet,
        items,
      }));
    }
    else {
      dispatch(createLottery({
        height,
        imageUrl,
        name: 'Lottery',
        width,
        shape,
        user,
        status,
        cost,
        donationPercent,
        donationWallet,
        items,
      }));
    }
    changeView(-1);
  };

  addItem = () => {
    this.setState((state) => {
      const { item, items } = state;
      item.itemName = this.item.itemName.value;
      item.itemPrice = this.item.itemPrice.value;
      item.itemShipCost = this.item.itemShipCost.value;
      item.itemDescription = this.item.itemDescription.value;
      this.item.itemName.value = '';
      this.item.itemPrice.value = '';
      this.item.itemShipCost.value = '';
      this.item.itemDescription.value = '';
      items.push(item);
      return {
        items,
        item: {
          itemImageUrl: '',
        },
        modal_active: false,
      };
    });
  };

  showModal = (e) => {
    e.preventDefault();
    this.setState((state) => { return { modal_active: !state.modal_active }; });
  };

  itemDelete = (i) => {
    let { items } = this.state;
    items = items.filter((item) => item !== i);
    this.setState({ items });
  };

  itemContent = () => {
    const { items } = this.state;
    const result = [];
    for (let i = 0; i < items.length; i++) {
      result.push(
        <tr key={i}>
          <td>
            {i + 1}
          </td>
          <td>
            <img src={items[i].itemImageUrl} alt="" width="100%" />
          </td>
          <td>
            {items[i].itemName}
          </td>
          <td>
            $ {items[i].itemPrice}
          </td>
          <td>
            $ {items[i].itemShipCost}
          </td>
          <td>
            {items[i].itemDescription}
          </td>
          <td>
            <i className="flaticon-delete" onClick={() => this.itemDelete(items[i])} />
          </td>
        </tr>
      );
    }

    return result;
  };

  render() {
    const { height, imageUrl, width, status, shape, user, cost, donationPercent, donationWallet, items, item, modal_active } = this.state;
    const { admin, clickable, changeView, lottery } = this.props;
    return (
      <div className="m-portlet app__lottery__edit__view">
        {clickable && (
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <h3 className="m-portlet__head-text">
                  {`${lottery ? 'Edit' : 'Create'} ${admin ? 'Lottery' : 'Order'}`}
                </h3>
              </div>
            </div>
          </div>
        )}

        <div className="m-form m-form--fit m-form--label-align-right">
          <div className="m-portlet__body">
            <div className="form-group m-form__group row">
              <div className={admin ? 'col-lg-6 col-md-8 col-sm-12' : 'col-12'}>
                <div className="position-relative image-container">
                  {imageUrl && <img src={imageUrl} alt="" width="100%" />}
                  <table className="table table-bordered imageTable position-absolute">
                    <tbody>
                      {this.tableContent()}
                    </tbody>
                  </table>
                </div>
              </div>
              {admin && (
                <div className="col-lg-6 col-md-4 col-sm-12">
                  <div className="m-dropzone dropzone m-dropzone--primary" onClick={this.fileUpload}>
                    <div className="m-dropzone__msg dz-message needsclick">
                      <h3 className="m-dropzone__msg-title">Drop files here or click to upload lottery background.</h3>
                      <input type="file" id="m-dropzone__button" className="d-none" onChange={(e) => this.handleImageChange(e)} />
                    </div>
                  </div>

                  { imageUrl && (
                    <div className="form-group m-form__group row">
                      <span className="col-4 col-form-label">Width</span>
                      <div className="col-8">
                        <input className="form-control m-input" type="number" defaultValue={width} onChange={(e) => this.setWidth(e)} />
                      </div>
                    </div>
                  )}

                  { imageUrl && (
                    <div className="form-group m-form__group row">
                      <span className="col-4 col-form-label">Height</span>
                      <div className="col-8">
                        <input
                          className="form-control m-input"
                          type="number"
                          defaultValue={height}
                          onChange={(e) => this.setHeight(e)}
                        />
                      </div>
                    </div>
                  )}

                  { imageUrl && (
                    <div className="form-group m-form__group row">
                      <span className="col-4 col-form-label">Cost</span>
                      <div className="col-8">
                        <input
                          className="form-control m-input"
                          type="number"
                          step=".01"
                          defaultValue={cost}
                          onChange={(e) => this.setCost(e)}
                        />
                      </div>
                    </div>
                  )}

                  { imageUrl && (
                    <div className="form-group m-form__group row">
                      <span className="col-4 col-form-label">Token Count</span>
                      <div className="col-8 col-form-label">
                        {cost ? parseInt(cost * 4, 10) : ''} Tokens
                        <span className="pull-right">( 1 Token = $ 0.25 )</span>
                      </div>

                    </div>
                  )}

                  { imageUrl && (
                    <div className="form-group m-form__group row">
                      <span className="col-4 col-form-label">Donation(Percent)</span>
                      <div className="col-8">
                        <input
                          className="form-control m-input"
                          type="number"
                          min="0"
                          max="100"
                          defaultValue={donationPercent} onChange={(e) => this.setDonationPercent(e)}
                        />
                      </div>
                    </div>
                  )}

                  { imageUrl && (
                    <div className="form-group m-form__group row">
                      <span className="col-4 col-form-label">Donation(Wallet)</span>
                      <div className="col-8">
                        <input
                          className="form-control m-input"
                          type="text"
                          defaultValue={donationWallet}
                          onChange={(e) => this.setDonationWallet(e)}
                        />
                      </div>
                    </div>
                  )}

                  { imageUrl && (
                    <div className="form-group m-form__group row">
                      <span className="col-4 col-form-label">Selected Count: </span>
                      <span className="col-8 col-form-label">{user.length} / {width * height} </span>
                    </div>
                  )}

                  {imageUrl && admin && (
                    <div className="form-group m-form__group row">
                      <span className="col-4 col-form-label">Shape Count:  </span>
                      <span className="col-8 col-form-label">{shape.length} / {width * height}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
            {admin && clickable && (
              <div className="form-group m-form__group row">
                <button type="button" className="btn btn-success" onClick={(e) => this.showModal(e)}>
                  <i className="la la-plus" />
                  <span>New Shopping Item</span>
                </button>
                {items.length ? (
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <td width="5%">ID</td>
                        <td width="10%">Image</td>
                        <td width="10%">Name</td>
                        <td width="10%">Price</td>
                        <td width="10%">Shipping Cost</td>
                        <td width="50%">Description</td>
                        <td width="5%">Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.itemContent()}
                    </tbody>
                  </table>
                ) : ''}
                <div
                  className="modal fade show"
                  id="m_modal_item"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ display: (modal_active ? 'block' : 'none') }}
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => this.showModal(e)}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-lg-6 col-md-8 col-sm-12">
                            <div className="position-relative image-container">
                              <span className="form-control-label">Image:</span>
                              {item.itemImageUrl && <img src={item.itemImageUrl} alt="" width="100%" />}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-4 col-sm-12">
                            <div className="m-dropzone dropzone m-dropzone--primary" onClick={this.itemUpload}>
                              <div className="m-dropzone__msg dz-message needsclick">
                                <h3 className="m-dropzone__msg-title">Drop files here or click to Shopping Item Image.</h3>
                                <input type="file" id="m-item__button" className="d-none" onChange={(e) => this.handleItemChange(e)} />
                              </div>
                            </div>
                            <div className="form-group mt-5">
                              <span className="form-control-label">Name:</span>
                              <input type="text" className="form-control" id="item-name" ref={(e) => { this.item.itemName = e; }} />
                            </div>
                            <div className="form-group">
                              <span className="form-control-label">Retail Price:</span>
                              <input type="number" className="form-control" id="item-price" ref={(e) => { this.item.itemPrice = e; }} />
                            </div>
                            <div className="form-group">
                              <span className="form-control-label">Shipping Cost:</span>
                              <input type="number" className="form-control" id="item-shipcost" ref={(e) => { this.item.itemShipCost = e; }} />
                            </div>
                            <div className="form-group">
                              <span className="form-control-label">Description:</span>
                              <textarea className="form-control" id="item-description" ref={(e) => { this.item.itemDescription = e; }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={(e) => this.showModal(e)}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.addItem}>Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {clickable && (
            <div className="m-portlet__foot m-portlet__foot--fit">
              <div className="m-form__actions m-form__actions">
                <div className="row">
                  {admin && lottery && (
                    <div className="mr-auto">
                      <button type="button" className="btn btn-danger" onClick={this.deleteLottery}>Delete</button>
                    </div>
                  )}

                  { admin && lottery && status === 1 && (
                    <div className="col-3">
                      <button type="button" className="btn btn-primary btn-block" onClick={(e) => this.setStatus(2)}>Start</button>
                    </div>
                  )}
                  { admin && lottery && status === 2 && (
                    <div className="col-3">
                      <button type="button" className="btn btn-danger btn-block" onClick={(e) => this.setStatus(3)}>Complete</button>
                    </div>
                  )}
                  { admin && lottery && (
                    <div className="col-3">
                      <button type="button" className="btn btn-warning btn-block" onClick={(e) => this.setStatus(4)}>Cancel</button>
                    </div>
                  )}

                  <div className="ml-auto">
                    <button type="button" className="btn btn-brand" onClick={(e) => this.createLottery(e)}>Save</button>
                    <button type="button" className="btn btn-secondary" onClick={() => changeView(-1)}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

LotteryEditView.propTypes = {
  admin: PropTypes.bool.isRequired,
  changeView: PropTypes.func.isRequired,
  clickable: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  lottery: PropTypes.object,
  username: PropTypes.string.isRequired,
};

LotteryEditView.defaultProps = {
  clickable: true
}

export default LotteryEditView;
