import { Table} from "antd";
import { StoryListStyled } from "./style";
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
          <StoryListStyled>
            <Table
              pagination={{pageSize:21}}
              columns={columns}
              scroll={{
                x:'auto',
                y:'75vh'
              }}
              dataSource={[...adminsData.map(({ storyLayout,
                storyType,
                location,
                tags,
                boost,
                disappear,
                createdAt }, id) => (
                {
                  id,
                  storyLayout,
                  storyType,
                  location,
                  tags,
                  boost,
                  disappear,
                  createdAt
                }
              ))]}
            />
          </StoryListStyled>
        </Container>

      </div>
    </>
  );
};

export default Index;
