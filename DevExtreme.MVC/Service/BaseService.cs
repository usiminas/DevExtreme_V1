using DevExtreme.MVC.Models;
using DevExtreme.MVC.Util;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Service
{
    public class BaseService<T>
    {
        public Retorno Remove(int item)
        {
            return new Retorno() { Error = 0, MsgError = "O registro foi removido com sucesso." };
        }
        public Retorno Save(T item)
        {
            return new Retorno() { Error = 0, MsgError = "O registro foi salvo com sucesso." };
        }
        public Retorno Find()
        {            
            return new Retorno() { Error = 0, Object = GetListByModelType(), MsgError = "Listagem efetuada com sucesso." };
        }

        public IList GetListByModelType()
        {

            IList lst = null;

            switch (typeof(T).Name)
            {
                case "GridViewModel":

                    lst = new List<GridViewModel>();

                    for (int i = 0; i < 30; i++)
                    {
                        lst.Add(new GridViewModel()
                        {
                            ID = (i + 1),
                            CompanyName = "CompanyName " + (i + 1),
                            Address = "Address " + (i + 1),
                            City = "City " + (i + 1),
                            State = "State " + (i + 1),
                            Zipcode = "Zipcode " + (i + 1),
                            Phone = "Phone " + (i + 1),
                            Fax = "Fax " + (i + 1),
                            Website = "Website " + (i + 1)
                        });
                    }

                    break;

                case "PessoaModel":

                    lst = new List<PessoaModel>();

                    for (int i = 0; i < 30; i++)
                    {
                        lst.Add(new PessoaModel()
                        {
                            ID = (i + 1),
                            Nome = "Nome " + (i + 1),
                            DataNascimento = DateTime.Now.AddDays(i + 1)
                        });
                    }

                    break;

                case "UsuarioModel":

                    lst = new List<UsuarioModel>();

                    for (int i = 0; i < 30; i++)
                    {
                        lst.Add(new UsuarioModel()
                        {
                            ID = (i + 1),
                            Usuario = "Usuario " + (i + 1),
                            Login = "Login " + (i + 1),
                        });
                    }

                    break;

                default:
                    break;
            }

            return lst;

        }
    }
}