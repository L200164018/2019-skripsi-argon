import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Table,
  Container,
  Col,
  Row
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Tables extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
               
                <CardHeader className="border-0">
                  <Col>
                    <h3 className="mb-0">Surat Keputusan </h3>
                  </Col>
                </CardHeader>

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">No Arsip</th>
                      <th scope="col">Tgl Surat</th>
                      <th scope="col">Tujuan</th>
                      <th scope="col">Asal Surat</th>
                      <th scope="col">No Surat</th>
                      <th scope="col">Ringkasan</th>
                      <th scope="col">Disposisis</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-left">
                          <span className="mb-0 text-sm">1212</span>
                        </Media>
                      </th>
                      <td>12 Desember</td>
                      <td className="align-item-left">Rektorat</td>
                      <td>Pimpinan Wilayah Jawa Tengah</td>
                      <td>126/II.IVA/2019</td>
                      <td>Undangan Kepada Universitas Muhammadiyah</td>
                      <td></td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Diterima
                        </Badge>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-left">
                          <span className="mb-0 text-sm">1212</span>
                        </Media>
                      </th>
                      <td>12 Desember</td>
                      <td className="align-item-left">Rektorat</td>
                      <td>Pimpinan Wilayah Jawa Tengah</td>
                      <td>126/II.IVA/2019</td>
                      <td>Undangan Kepada Universitas Muhammadiyah</td>
                      <td></td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Diterima
                        </Badge>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-left">
                          <span className="mb-0 text-sm">1212</span>
                        </Media>
                      </th>
                      <td>12 Desember</td>
                      <td className="align-item-left">Rektorat</td>
                      <td>Pimpinan Wilayah Jawa Tengah</td>
                      <td>126/II.IVA/2019</td>
                      <td>Undangan Kepada Universitas Muhammadiyah</td>
                      <td></td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Diterima
                        </Badge>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-left">
                          <span className="mb-0 text-sm">1212</span>
                        </Media>
                      </th>
                      <td>12 Desember</td>
                      <td className="align-item-left">Rektorat</td>
                      <td>Pimpinan Wilayah Jawa Tengah</td>
                      <td>126/II.IVA/2019</td>
                      <td>Undangan Kepada Universitas Muhammadiyah</td>
                      <td></td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Diterima
                        </Badge>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-left">
                          <span className="mb-0 text-sm">1212</span>
                        </Media>
                      </th>
                      <td>12 Desember</td>
                      <td className="align-item-left">Rektorat</td>
                      <td>Pimpinan Wilayah Jawa Tengah</td>
                      <td>126/II.IVA/2019</td>
                      <td>Undangan Kepada Universitas Muhammadiyah</td>
                      <td></td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Diterima
                        </Badge>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-left">
                          <span className="mb-0 text-sm">1212</span>
                        </Media>
                      </th>
                      <td>12 Desember</td>
                      <td className="align-item-left">Rektorat</td>
                      <td>Pimpinan Wilayah Jawa Tengah</td>
                      <td>126/II.IVA/2019</td>
                      <td>Undangan Kepada Universitas Muhammadiyah</td>
                      <td></td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Diterima
                        </Badge>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-left">
                          <span className="mb-0 text-sm">1212</span>
                        </Media>
                      </th>
                      <td>12 Desember</td>
                      <td className="align-item-left">Rektorat</td>
                      <td>Pimpinan Wilayah Jawa Tengah</td>
                      <td>126/II.IVA/2019</td>
                      <td>Undangan Kepada Universitas Muhammadiyah</td>
                      <td></td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-info" />
                          Diterima
                        </Badge>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Tables;
