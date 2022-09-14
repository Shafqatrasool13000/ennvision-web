import { Table} from "antd";
import  { RequestListStyled } from "./style";
import MobileTable from "./MobileTable";
import { Container } from "react-bootstrap";
import { adminsData, columns } from "./TableData";

const Index = () => {
  return (
    <>
      <div className="d-md-none">
        <MobileTable
        />
      </div>
      <div className="d-none d-md-block">
        <Container>
          <RequestListStyled>
            {/* <div className="btn">
              <CustomButton
                bgcolor={BasicColor}
                color="white"
                padding="8px 8px"
                type="submit"
                width="130px"
                title="Create new"
              />
            </div> */}
            <Table
              pagination={{pageSize:21}}
              columns={columns}
              scroll={{
                x:'auto',
                y:'75vh'
              }}
              dataSource={[...adminsData.map(({ category,
                sender,
                receiver,
                bookingType,
                bookingAt,
                createdAt},id)=>(
                  {
                    id,
                    category,
                    sender,
                    receiver,
                    bookingType,
                    bookingAt,
                    createdAt
                  }
              ))]}
            />
          </RequestListStyled>
        </Container>

      </div>
    </>
  );
};

export default Index;
