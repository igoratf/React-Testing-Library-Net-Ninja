import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import FollowersList from "../FollowersList"
import axios from "axios";

const MockFollowersList = () => {
   return (
      <BrowserRouter>
         <FollowersList />
      </BrowserRouter>
   )
}

const mockResponse = {
   data: {
      results: [
         {
            name: {
               first: "John",
               last: "Doe"
            },
            picture: {
               large: "https://randomuser.me/api/portraits/men/39.jpg"
            },
            login: {
               username: "Test"
            }
         }
      ]
   }
}


describe("FollowersList", () => {
   const getSpy = jest.spyOn(axios, "get");

   it("should render follower items", async () => {
      getSpy.mockResolvedValueOnce(mockResponse);
      render(<MockFollowersList />);
      const followerDivElement = await screen.findByTestId("follower-item-0");
      expect(followerDivElement).toBeInTheDocument();
   });

   it("should render multiple follower items", async () => {
      const mockResponseMultiple = {
         data: {
            results: [
               {
                  name: {
                     first: "John",
                     last: "Doe"
                  },
                  picture: {
                     large: "https://randomuser.me/api/portraits/men/39.jpg"
                  },
                  login: {
                     username: "Test"
                  }
               },
               {
                  name: {
                     first: "Mock",
                     last: "User"
                  },
                  picture: {
                     large: "https://randomuser.me/api/portraits/men/39.jpg"
                  },
                  login: {
                     username: "Mock"
                  }
               }
            ]
         }
      }
      getSpy.mockResolvedValueOnce(mockResponseMultiple);
      render(<MockFollowersList />);
      const followerDivElements = await screen.findAllByTestId(/follower-item/i);
      expect(followerDivElements.length).toBe(2);
   }) 
})