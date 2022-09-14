import { Table} from "antd";
import { NewsfeedListStyled } from "./style";
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
          <NewsfeedListStyled>
            <Table
              pagination={{pageSize:21}}
              columns={columns}
              scroll={{
                x:'auto',
                y:'75vh'
              }}
              dataSource={[...adminsData.map(({ booking, boost, category, comments, createdAt, likes, saved, shares, title, views }, id) => (
                {
                  id,
                  booking, 
                  boost,
                   category, 
                   comments, 
                   createdAt,
                    likes,
                     saved, 
                     shares, 
                     title,
                      views
                }
              ))]}
            />
          </NewsfeedListStyled>
        </Container>

      </div>
    </>
  );
};

export default Index;
