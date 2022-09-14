import { Table} from "antd";
import { PostListStyled } from "./style";
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
          <PostListStyled>
            <Table
              pagination={{pageSize:21,showLessItems:true}}
              columns={columns}
                scroll={{
                x:'auto',
                y:'75vh'
              }}
              dataSource={[...adminsData.map(({ postLayout,
                postType,
                location,
                tags,
                boost,
                disappear,
                createdAt }, id) => (
                {
                  id,
                  postLayout,
                  postType,
                  location,
                  tags,
                  boost,
                  disappear,
                  createdAt
                }
              ))]}
            />
          </PostListStyled>
        </Container>

      </div>
    </>
  );
};

export default Index;
